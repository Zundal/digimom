import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import { TRACKS } from "../config/site";
import { useAudioEngine } from "../hooks/useAudioEngine";
import {
  GOOD,
  LANES,
  LANE_COLORS,
  LANE_KEYS,
  PERFECT,
  makeGameBus,
  type Judgement,
} from "../lib/game";

const KeyboardScene = lazy(() => import("../three/KeyboardScene"));

const ACCENT: Record<string, string> = {
  violet: "#7c5cff",
  aqua: "#36e0c8",
  pink: "#ff6fb5",
};

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

export default function Resonance() {
  const { t } = useTranslation();
  const engine = useAudioEngine();
  const bus = useMemo(() => makeGameBus(), []);
  const wrapRef = useRef<HTMLDivElement>(null);

  const [immersive, setImmersive] = useState(false);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [best, setBest] = useState(0);
  const [judge, setJudge] = useState<{ type: Judgement; key: number } | null>(
    null
  );

  const armed = useRef(false);
  const missPtr = useRef(0);
  const judgeKey = useRef(0);

  const active =
    engine.isPlaying ||
    (engine.currentId !== null && engine.progress > 0 && engine.progress < 1);

  const resetGame = useCallback(() => {
    setScore(0);
    setCombo(0);
    setBest(0);
    setJudge(null);
    missPtr.current = 0;
    bus.flash.fill(0);
  }, [bus]);

  // Register a hit on a lane (from keyboard or touch).
  const hit = useCallback(
    (lane: number) => {
      engine.pluck(lane);
      bus.flash[lane] = 1;

      const now = engine.getTime();
      const notes = engine.chartRef.current;
      let bestIdx = -1;
      let bestErr = GOOD;
      for (let i = 0; i < notes.length; i++) {
        const n = notes[i];
        if (n.lane !== lane || n.judged) continue;
        const err = Math.abs(n.time - now);
        if (err <= bestErr) {
          bestErr = err;
          bestIdx = i;
        }
      }
      if (bestIdx >= 0) {
        const n = notes[bestIdx];
        n.judged = true;
        n.hit = true;
        const grade: Judgement = bestErr <= PERFECT ? "perfect" : "good";
        setScore((s) => s + (grade === "perfect" ? 100 : 55));
        setCombo((c) => {
          const nc = c + 1;
          setBest((b) => (nc > b ? nc : b));
          return nc;
        });
        judgeKey.current += 1;
        setJudge({ type: grade, key: judgeKey.current });
      }
    },
    [engine, bus]
  );

  // Track / playback control wrappers that also reset the game.
  const onTrack = useCallback(
    (id: string, url: string) => {
      if (engine.currentId !== id) resetGame();
      engine.toggle(id, url);
    },
    [engine, resetGame]
  );

  const onRestart = useCallback(() => {
    resetGame();
    engine.restart();
  }, [engine, resetGame]);

  // Keyboard input — only while the section is on screen.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!armed.current || e.repeat) return;
      const el = document.activeElement;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      const lane = LANE_KEYS.indexOf(e.key.toLowerCase());
      if (lane >= 0) {
        e.preventDefault();
        hit(lane);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hit]);

  // Arm input when the play surface is visible.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => (armed.current = e.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Miss detection loop — notes that slide past the hit window unhit.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!engine.isPlaying) return;
      const now = engine.getTime();
      const notes = engine.chartRef.current;
      while (
        missPtr.current < notes.length &&
        notes[missPtr.current].time < now - GOOD
      ) {
        const n = notes[missPtr.current];
        if (!n.judged) {
          n.judged = true;
          // Only penalise notes that genuinely passed (not a late chart load).
          if (now - n.time < 1) {
            setCombo(0);
            judgeKey.current += 1;
            setJudge({ type: "miss", key: judgeKey.current });
          }
        }
        missPtr.current++;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [engine]);

  const enterImmersive = useCallback(async () => {
    setImmersive(true);
    const el = wrapRef.current;
    try {
      if (el?.requestFullscreen) await el.requestFullscreen();
    } catch {
      /* iOS blocks element fullscreen — the CSS overlay still applies. */
    }
    // Phones play best in landscape; lock when the API allows it.
    try {
      const o = screen.orientation as ScreenOrientation & {
        lock?: (o: string) => Promise<void>;
      };
      await o.lock?.("landscape");
    } catch {
      /* Unsupported (e.g. iOS) — the rotate hint covers this case. */
    }
  }, []);

  const exitImmersive = useCallback(async () => {
    setImmersive(false);
    try {
      (screen.orientation as ScreenOrientation & { unlock?: () => void })
        .unlock?.();
    } catch {
      /* noop */
    }
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
    } catch {
      /* noop */
    }
  }, []);

  const toggleImmersive = useCallback(() => {
    if (immersive) void exitImmersive();
    else void enterImmersive();
  }, [immersive, enterImmersive, exitImmersive]);

  useEffect(() => {
    const onFs = () => {
      if (!document.fullscreenElement) {
        setImmersive(false);
        try {
          (screen.orientation as ScreenOrientation & { unlock?: () => void })
            .unlock?.();
        } catch {
          /* noop */
        }
      }
    };
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // Track portrait so phones that can't auto-rotate get a hint instead.
  const [portrait, setPortrait] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(orientation: portrait)");
    const update = () => setPortrait(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = immersive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [immersive]);

  return (
    <section id="resonance" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        index="06"
        eyebrow={t("resonance.eyebrow")}
        title={t("resonance.title")}
        subtitle={t("resonance.subtitle")}
      />

      <div
        ref={wrapRef}
        className={
          immersive
            ? "fixed inset-0 z-[70] bg-ink"
            : "relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface/40 to-ink"
        }
      >
        {/* 3D stage */}
        <div
          className={
            immersive ? "h-full w-full" : "h-[clamp(24rem,68vh,42rem)] w-full"
          }
        >
          <Suspense fallback={null}>
            <KeyboardScene
              analyserRef={engine.analyserRef}
              dataRef={engine.dataRef}
              chartRef={engine.chartRef}
              getTime={engine.getTime}
              bus={bus}
              active={active}
            />
          </Suspense>
        </div>

        {/* Contrast scrims so overlay text stays readable over the scene */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/85 via-ink/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink via-ink/85 to-transparent" />

        {/* Touch lanes (also catch mouse clicks) */}
        <div className="absolute inset-x-0 bottom-[7.5rem] top-16 flex sm:bottom-24">
          {Array.from({ length: LANES }, (_, l) => (
            <button
              key={l}
              aria-label={`lane ${l + 1}`}
              onPointerDown={(e) => {
                e.preventDefault();
                hit(l);
              }}
              className="group relative flex-1 border-r border-white/5 last:border-r-0"
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-active:opacity-100"
                style={{
                  background: `linear-gradient(to top, ${LANE_COLORS[l]}66, transparent 65%)`,
                }}
              />
              <span
                className="hud-chip pointer-events-none absolute bottom-2 left-1/2 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-lg font-mono text-sm font-bold"
                style={{ color: LANE_COLORS[l] }}
              >
                {LANE_KEYS[l].toUpperCase()}
              </span>
            </button>
          ))}
        </div>

        {/* HUD: now-playing + score */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3 sm:p-5">
          <div className="hud-chip rounded-xl px-3 py-2">
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-text sm:text-xs">
              {active && engine.currentId
                ? t(`resonance.tracks.${engine.currentId}.title`)
                : t("resonance.idle")}
            </p>
            {engine.analyzing && (
              <p className="mt-0.5 font-mono text-[0.6rem] tracking-widest text-aqua">
                {t("resonance.analyzing")}
              </p>
            )}
          </div>
          <div className="hud-chip rounded-xl px-3 py-2 text-right">
            <p className="font-mono text-xl font-bold leading-none tabular-nums text-text sm:text-3xl">
              {score.toLocaleString()}
            </p>
            <p className="mt-1 font-mono text-[0.6rem] tracking-widest text-faint">
              {t("resonance.best")} {best}
            </p>
          </div>
        </div>

        {/* Combo + judgement, centered */}
        <div className="pointer-events-none absolute inset-x-0 top-[22%] flex flex-col items-center">
          {combo > 1 && (
            <p className="text-legible font-display text-4xl font-bold text-text sm:text-6xl">
              {combo}
              <span className="ml-1 align-top text-sm text-muted sm:text-base">
                {t("resonance.combo")}
              </span>
            </p>
          )}
          {judge && (
            <p
              key={judge.key}
              className="judge-pop text-legible mt-1 font-display text-2xl font-bold sm:text-3xl"
              style={{
                color:
                  judge.type === "perfect"
                    ? "#5cf2da"
                    : judge.type === "good"
                      ? "#a892ff"
                      : "#ff8cc6",
              }}
            >
              {t(`resonance.judge.${judge.type}`)}
            </p>
          )}
        </div>

        {/* Exit (immersive) */}
        {immersive && (
          <button
            onClick={toggleImmersive}
            className="hud-chip absolute right-3 top-20 z-20 rounded-full px-4 py-2 text-xs font-medium text-text transition-colors hover:text-pink sm:top-5"
          >
            {t("resonance.exit")} ✕
          </button>
        )}

        {/* Rotate-to-landscape hint when a phone can't auto-rotate */}
        {immersive && portrait && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-ink/85 text-center backdrop-blur">
            <span className="rotate-hint text-5xl">📱</span>
            <p className="max-w-xs px-8 font-display text-lg font-medium text-text">
              {t("resonance.rotate")}
            </p>
            <button
              onClick={toggleImmersive}
              className="hud-chip rounded-full px-4 py-2 text-xs text-muted"
            >
              {t("resonance.exit")} ✕
            </button>
          </div>
        )}

        {/* Controls */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-5">
          <div className="mb-2.5 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line/70">
              <div
                className="h-full rounded-full bg-gradient-to-r from-aqua via-violet to-pink"
                style={{ width: `${engine.progress * 100}%` }}
              />
            </div>
            <span className="hidden font-mono text-[0.65rem] tracking-wider text-muted sm:inline">
              {t("resonance.howto")}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Track chips — horizontally scrollable on small screens */}
            <div className="scrollbar-none flex flex-1 gap-2 overflow-x-auto">
              {TRACKS.map((track) => {
                const playing =
                  engine.currentId === track.id && engine.isPlaying;
                const accent = ACCENT[track.accent];
                return (
                  <button
                    key={track.id}
                    onClick={() => onTrack(track.id, asset(track.file))}
                    className="hud-chip flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-all sm:px-4 sm:py-2.5 sm:text-sm"
                    style={{
                      borderColor: playing ? accent : undefined,
                      color: playing ? accent : "var(--color-text)",
                    }}
                  >
                    <span
                      aria-hidden
                      className="grid h-5 w-5 place-items-center rounded-full text-[0.6rem] sm:h-6 sm:w-6"
                      style={{
                        background: playing ? accent : "var(--color-surface-2)",
                        color: playing ? "#0b0b12" : accent,
                      }}
                    >
                      {playing ? "❚❚" : "▶"}
                    </span>
                    <span className="whitespace-nowrap">
                      {t(`resonance.tracks.${track.id}.title`)}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={onRestart}
              disabled={!engine.currentId}
              aria-label={t("resonance.restart")}
              className="hud-chip shrink-0 rounded-full px-3 py-2 text-sm font-medium text-text transition-colors hover:text-violet disabled:opacity-40 sm:px-4 sm:py-2.5"
            >
              <span aria-hidden>↺</span>
              <span className="ml-1.5 hidden sm:inline">
                {t("resonance.restart")}
              </span>
            </button>

            <button
              onClick={toggleImmersive}
              aria-label={immersive ? t("resonance.exit") : t("resonance.fullscreen")}
              className="hud-chip shrink-0 rounded-full px-3 py-2 text-sm font-medium text-text transition-colors hover:text-aqua sm:px-4 sm:py-2.5"
            >
              <span aria-hidden>⛶</span>
              <span className="ml-1.5 hidden sm:inline">
                {immersive ? t("resonance.exit") : t("resonance.fullscreen")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
