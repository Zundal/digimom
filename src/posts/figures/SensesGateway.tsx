import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Sense = {
  key: string;
  label: string;
  organ: string;
  receptor: string;
  stimulus: string;
};

const ACCENTS = [
  "var(--color-aqua)",
  "var(--color-violet)",
  "var(--color-pink)",
  "var(--color-aqua)",
  "var(--color-violet)",
];

// Minimal line-art glyph per sense, drawn in the node's accent colour.
function Glyph({ k }: { k: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (k) {
    case "sight":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path {...common} d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
          <circle {...common} cx="12" cy="12" r="2.6" />
        </svg>
      );
    case "hearing":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path {...common} d="M6 9a6 6 0 0 1 12 0c0 4-3 4-3 7a3 3 0 0 1-6 0" />
          <path {...common} d="M9 9a3 3 0 0 1 6 0" />
        </svg>
      );
    case "touch":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path {...common} d="M8 11V5.5a1.5 1.5 0 0 1 3 0V10" />
          <path {...common} d="M11 10V4.5a1.5 1.5 0 0 1 3 0V10" />
          <path {...common} d="M14 10V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.6L5 14a1.5 1.5 0 0 1 2.4-1.8L8 13" />
        </svg>
      );
    case "smell":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path {...common} d="M9 4v9a4 4 0 1 0 4 4" />
          <path {...common} d="M9 13c-3 0-5 2-5 4a2 2 0 0 0 2 2" />
        </svg>
      );
    case "taste":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path {...common} d="M12 4c-4 0-7 2-7 6 0 5 4 10 7 10s7-5 7-10c0-4-3-6-7-6Z" />
          <path {...common} d="M12 7v11" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SensesGateway() {
  const { t } = useTranslation();
  const cols = t("figures.sensesGateway.cols", { returnObjects: true }) as {
    organ: string;
    receptor: string;
    stimulus: string;
  };
  const items = t("figures.sensesGateway.items", {
    returnObjects: true,
  }) as Sense[];
  const [active, setActive] = useState(0);
  const sel = items[active];
  const accent = ACCENTS[active % ACCENTS.length];

  return (
    <Frame
      title={t("figures.sensesGateway.title")}
      caption={t("figures.sensesGateway.caption")}
    >
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {items.map((s, i) => {
          const on = i === active;
          const c = ACCENTS[i % ACCENTS.length];
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="group flex flex-col items-center gap-2 rounded-xl border px-1 py-3 transition-colors sm:py-4"
              style={{
                borderColor: on
                  ? `color-mix(in srgb, ${c} 55%, var(--color-line))`
                  : "var(--color-line)",
                background: on
                  ? `color-mix(in srgb, ${c} 12%, transparent)`
                  : "transparent",
                color: on ? c : "var(--color-faint)",
              }}
            >
              <Glyph k={s.key} />
              <span className="text-[0.7rem] font-medium tracking-tight sm:text-xs">
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={sel.key}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-5 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3"
      >
        {[
          { k: cols.organ, v: sel.organ },
          { k: cols.receptor, v: sel.receptor },
          { k: cols.stimulus, v: sel.stimulus },
        ].map((row, i) => (
          <div
            key={i}
            className="bg-[color-mix(in_srgb,var(--color-surface)_85%,transparent)] px-4 py-3.5"
          >
            <div
              className="font-mono text-[0.65rem] uppercase tracking-widest"
              style={{ color: accent }}
            >
              {row.k}
            </div>
            <div className="mt-1.5 text-sm leading-snug text-text">{row.v}</div>
          </div>
        ))}
      </motion.div>
    </Frame>
  );
}
