import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Principle = { key: string; label: string; desc: string };

const AQUA = "var(--color-aqua)";
const VIOLET = "var(--color-violet)";

function Demo({ k }: { k: string }) {
  const dot = (cx: number, cy: number, fill = AQUA, r = 5) => (
    <circle key={`${cx}-${cy}-${fill}`} cx={cx} cy={cy} r={r} fill={fill} />
  );

  switch (k) {
    case "proximity": {
      // two tight clusters read as two groups, not eight dots
      const left = [30, 46, 62];
      const right = [138, 154, 170];
      return (
        <svg viewBox="0 0 200 90" className="h-full w-full">
          {[28, 52].flatMap((y) => left.map((x) => dot(x, y)))}
          {[28, 52].flatMap((y) => right.map((x) => dot(x, y, VIOLET)))}
        </svg>
      );
    }
    case "similarity": {
      // alternating columns of shape-type → eye groups by column
      const xs = [30, 64, 98, 132, 166];
      const ys = [22, 45, 68];
      return (
        <svg viewBox="0 0 200 90" className="h-full w-full">
          {xs.flatMap((x, ci) =>
            ys.map((y) =>
              ci % 2 === 0 ? (
                dot(x, y, AQUA)
              ) : (
                <rect
                  key={`${x}-${y}`}
                  x={x - 5}
                  y={y - 5}
                  width="10"
                  height="10"
                  rx="1.5"
                  fill={VIOLET}
                />
              )
            )
          )}
        </svg>
      );
    }
    case "continuity": {
      // two crossing strokes are seen as two smooth paths, not four segments
      return (
        <svg viewBox="0 0 200 90" className="h-full w-full" fill="none">
          <path
            d="M10 70 C 70 70, 130 20, 190 20"
            stroke={AQUA}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M10 20 C 70 20, 130 70, 190 70"
            stroke={VIOLET}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    }
    case "closure":
    default: {
      // arcs only — the brain completes the circle
      const arcs = [0, 60, 120, 180, 240, 300];
      const cx = 100;
      const cy = 45;
      const r = 30;
      return (
        <svg viewBox="0 0 200 90" className="h-full w-full" fill="none">
          {arcs.map((a) => {
            const a0 = (a + 8) * (Math.PI / 180);
            const a1 = (a + 52) * (Math.PI / 180);
            const x0 = cx + r * Math.cos(a0);
            const y0 = cy + r * Math.sin(a0);
            const x1 = cx + r * Math.cos(a1);
            const y1 = cy + r * Math.sin(a1);
            return (
              <path
                key={a}
                d={`M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`}
                stroke={AQUA}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      );
    }
  }
}

export default function GestaltPrinciples() {
  const { t } = useTranslation();
  const principles = t("figures.gestalt.principles", {
    returnObjects: true,
  }) as Principle[];
  const [active, setActive] = useState(0);
  const sel = principles[active];

  return (
    <Frame
      title={t("figures.gestalt.title")}
      caption={t("figures.gestalt.caption")}
    >
      <div className="flex flex-wrap gap-2">
        {principles.map((p, i) => {
          const on = i === active;
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => setActive(i)}
              className="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors"
              style={{
                borderColor: on
                  ? "color-mix(in srgb, var(--color-aqua) 55%, var(--color-line))"
                  : "var(--color-line)",
                background: on
                  ? "color-mix(in srgb, var(--color-aqua) 12%, transparent)"
                  : "transparent",
                color: on ? "var(--color-aqua)" : "var(--color-faint)",
              }}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      <motion.div
        key={sel.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
      >
        <div className="h-28 w-full max-w-xs rounded-xl border border-line bg-[color-mix(in_srgb,var(--color-ink)_40%,transparent)] p-3">
          <Demo k={sel.key} />
        </div>
        <p className="text-sm leading-relaxed text-muted">
          <span className="font-semibold text-text">{sel.label}</span>
          {" — "}
          {sel.desc}
        </p>
      </motion.div>
    </Frame>
  );
}
