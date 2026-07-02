import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Item = { key: string; label: string; max: string; sub: string };

const ACCENTS = ["var(--color-aqua)", "var(--color-violet)", "var(--color-pink)"];

export default function CheongyakPoints() {
  const { t } = useTranslation();
  const items = t("figures.cheongyakPoints.items", {
    returnObjects: true,
  }) as Item[];
  const [active, setActive] = useState(0);

  return (
    <Frame
      title={t("figures.cheongyakPoints.title")}
      caption={t("figures.cheongyakPoints.caption")}
      footer={t("figures.cheongyakPoints.note")}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {items.map((item, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          const on = i === active;
          return (
            <motion.button
              key={item.key}
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
                {item.max}
              </span>
              <span className="mt-1 text-sm font-semibold tracking-tight text-text">
                {item.label}
              </span>
              <span className="mt-1 text-xs leading-snug text-muted">
                {item.sub}
              </span>
            </motion.button>
          );
        })}
      </div>
    </Frame>
  );
}
