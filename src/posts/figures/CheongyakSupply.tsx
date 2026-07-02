import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Item = { key: string; label: string; desc: string; ex: string };

export default function CheongyakSupply() {
  const { t } = useTranslation();
  const items = t("figures.cheongyakSupply.items", {
    returnObjects: true,
  }) as Item[];
  const [active, setActive] = useState(0);

  const accents = [
    "var(--color-aqua)",
    "var(--color-violet)",
    "var(--color-pink)",
    "var(--color-aqua)",
  ];

  return (
    <Frame
      title={t("figures.cheongyakSupply.title")}
      caption={t("figures.cheongyakSupply.caption")}
      footer={t("figures.cheongyakSupply.note")}
    >
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item, i) => {
          const accent = accents[i % accents.length];
          const on = i === active;
          return (
            <motion.button
              key={item.key}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              animate={{ opacity: on ? 1 : 0.62 }}
              className="rounded-xl border px-4 py-3.5 text-left transition-colors"
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
                {item.label}
              </span>
              <span className="mt-1 block text-sm font-semibold tracking-tight text-text">
                {item.desc}
              </span>
              <span className="mt-1 block text-xs leading-snug text-muted">
                {item.ex}
              </span>
            </motion.button>
          );
        })}
      </div>
    </Frame>
  );
}
