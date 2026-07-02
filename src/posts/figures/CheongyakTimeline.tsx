import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Stage = { key: string; label: string; sub: string };

const ACCENTS = ["var(--color-aqua)", "var(--color-violet)", "var(--color-pink)"];

export default function CheongyakTimeline() {
  const { t } = useTranslation();
  const stages = t("figures.cheongyakTimeline.stages", {
    returnObjects: true,
  }) as Stage[];
  const [active, setActive] = useState(0);

  return (
    <Frame
      title={t("figures.cheongyakTimeline.title")}
      caption={t("figures.cheongyakTimeline.caption")}
      footer={t("figures.cheongyakTimeline.note")}
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
                  <span className="rotate-90 text-faint sm:rotate-0">→</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
