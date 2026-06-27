import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Stage = { key: string; label: string; sub: string };
type Arrows = {
  attention: string;
  rehearsal: string;
  retrieval: string;
  forget: string;
};

const ACCENTS = ["var(--color-aqua)", "var(--color-violet)", "var(--color-pink)"];

export default function MemoryFlow() {
  const { t } = useTranslation();
  const stages = t("figures.memoryFlow.stages", {
    returnObjects: true,
  }) as Stage[];
  const arrows = t("figures.memoryFlow.arrows", {
    returnObjects: true,
  }) as Arrows;
  const [active, setActive] = useState(1);

  return (
    <Frame
      title={t("figures.memoryFlow.title")}
      caption={t("figures.memoryFlow.caption")}
      footer={`${arrows.rehearsal} ↺ · ${arrows.retrieval} ← · ${arrows.forget} ↓`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {stages.map((s, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          const on = i === active;
          return (
            <div
              key={s.key}
              className="flex items-stretch gap-2 sm:flex-1 sm:flex-col"
            >
              <motion.button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                animate={{ opacity: on ? 1 : 0.62 }}
                className="flex flex-1 flex-col rounded-xl border px-4 py-3.5 text-left transition-colors"
                style={{
                  borderColor: on
                    ? `color-mix(in srgb, ${accent} 55%, var(--color-line))`
                    : "var(--color-line)",
                  background: on
                    ? `color-mix(in srgb, ${accent} 12%, transparent)`
                    : "transparent",
                }}
              >
                <span
                  className="font-mono text-[0.6rem] uppercase tracking-widest"
                  style={{ color: accent }}
                >
                  0{i + 1}
                </span>
                <span className="mt-1 text-sm font-semibold tracking-tight text-text">
                  {s.label}
                </span>
                <span className="mt-1 text-xs leading-snug text-muted">
                  {s.sub}
                </span>
              </motion.button>

              {i < stages.length - 1 && (
                <div className="flex shrink-0 items-center justify-center sm:py-0.5">
                  <span className="flex items-center gap-1 font-mono text-[0.6rem] text-faint">
                    <span className="rotate-90 sm:rotate-0">→</span>
                    {i === 0 ? arrows.attention : arrows.rehearsal}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
