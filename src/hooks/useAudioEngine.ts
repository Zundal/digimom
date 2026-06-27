import { useCallback, useEffect, useRef, useState } from "react";
import { buildChart, thinChart, type Note } from "../lib/chart";

// Touch devices get a thinned beatmap so it's playable with fingers.
const IS_TOUCH =
  typeof window !== "undefined" &&
  (window.matchMedia?.("(pointer: coarse)").matches ||
    navigator.maxTouchPoints > 0);
const TOUCH_MIN_GAP = 0.3; // seconds between notes on mobile

// Drives a single <audio> element through a Web Audio analyser so the 3D
// keyboard can read the live spectrum, and pre-analyses each track offline into
// a falling-note chart for the rhythm game. The graph and the synth used for
// hit feedback are created lazily on the first user gesture.
export type AudioEngine = {
  analyserRef: React.MutableRefObject<AnalyserNode | null>;
  dataRef: React.MutableRefObject<Uint8Array>;
  chartRef: React.MutableRefObject<Note[]>;
  isPlaying: boolean;
  currentId: string | null;
  analyzing: boolean;
  progress: number; // 0..1
  toggle: (id: string, url: string) => void;
  restart: () => void;
  getTime: () => number;
  pluck: (lane: number) => void;
};

const PLUCK_HZ = [196.0, 277.18, 392.0, 587.33]; // G3 C#4 G4 D5 — per lane

export function useAudioEngine(): AudioEngine {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataRef = useRef<Uint8Array>(new Uint8Array(0));
  const chartRef = useRef<Note[]>([]);
  const cacheRef = useRef<Map<string, Note[]>>(new Map());

  const [isPlaying, setPlaying] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  // The AudioContext alone — enough to play the hit synth before any song
  // has been loaded (the first lane tap is itself the unlocking gesture).
  const ensureCtx = useCallback(() => {
    if (!ctxRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctxRef.current = new Ctor();
    }
    if (ctxRef.current.state === "suspended") void ctxRef.current.resume();
    return ctxRef.current;
  }, []);

  const ensureGraph = useCallback(() => {
    if (!audioRef.current) {
      const a = new Audio();
      a.crossOrigin = "anonymous";
      a.preload = "auto";
      a.addEventListener("ended", () => {
        setPlaying(false);
        setProgress(1);
      });
      a.addEventListener("timeupdate", () => {
        if (a.duration) setProgress(a.currentTime / a.duration);
      });
      audioRef.current = a;
    }
    const ctx = ensureCtx();
    if (!analyserRef.current) {
      const source = ctx.createMediaElementSource(audioRef.current);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 4096;
      analyser.smoothingTimeConstant = 0.82;
      source.connect(analyser);
      analyser.connect(ctx.destination);
      analyserRef.current = analyser;
      dataRef.current = new Uint8Array(analyser.frequencyBinCount);
    }
  }, [ensureCtx]);

  // Decode + beatmap a track once, then cache it.
  const analyze = useCallback(async (id: string, url: string) => {
    if (cacheRef.current.has(id)) {
      chartRef.current = cacheRef.current.get(id)!;
      return;
    }
    setAnalyzing(true);
    try {
      const res = await fetch(url);
      const buf = await res.arrayBuffer();
      const audioBuf = await ctxRef.current!.decodeAudioData(buf);
      let chart = await buildChart(audioBuf);
      if (IS_TOUCH) chart = thinChart(chart, TOUCH_MIN_GAP);
      cacheRef.current.set(id, chart);
      // Only apply if the user is still on this track.
      if (audioRef.current && audioRef.current.src.endsWith(url))
        chartRef.current = chart;
    } catch {
      chartRef.current = [];
    } finally {
      setAnalyzing(false);
    }
  }, []);

  const toggle = useCallback(
    (id: string, url: string) => {
      ensureGraph();
      const audio = audioRef.current!;
      const ctx = ctxRef.current!;
      if (ctx.state === "suspended") void ctx.resume();

      if (currentId === id && isPlaying) {
        audio.pause();
        setPlaying(false);
        return;
      }

      if (currentId !== id) {
        audio.src = url;
        audio.currentTime = 0;
        setProgress(0);
        setCurrentId(id);
        chartRef.current = cacheRef.current.get(id) ?? [];
        void analyze(id, url);
      }
      void audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    },
    [ensureGraph, analyze, currentId, isPlaying]
  );

  const restart = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audio.src) return;
    for (const n of chartRef.current) {
      n.judged = false;
      n.hit = false;
    }
    audio.currentTime = 0;
    if (ctxRef.current?.state === "suspended") void ctxRef.current.resume();
    void audio.play().then(() => setPlaying(true)).catch(() => {});
  }, []);

  const getTime = useCallback(() => audioRef.current?.currentTime ?? 0, []);

  // Punchy press sound so every keypress / tap gives clear feedback, even
  // before a song is playing. A bright transient click + a tonal body.
  const pluck = useCallback(
    (lane: number) => {
      const ctx = ensureCtx();
      const now = ctx.currentTime;
      const freq = PLUCK_HZ[lane % PLUCK_HZ.length];

      // Tonal body.
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.34, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);

      // Crisp attack click for a tactile "pressed it" feel.
      const click = ctx.createOscillator();
      const cg = ctx.createGain();
      click.type = "square";
      click.frequency.setValueAtTime(freq * 3, now);
      cg.gain.setValueAtTime(0.16, now);
      cg.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
      click.connect(cg).connect(ctx.destination);
      click.start(now);
      click.stop(now + 0.05);
    },
    [ensureCtx]
  );

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      void ctxRef.current?.close();
    };
  }, []);

  return {
    analyserRef,
    dataRef,
    chartRef,
    isPlaying,
    currentId,
    analyzing,
    progress,
    toggle,
    restart,
    getTime,
    pluck,
  };
}
