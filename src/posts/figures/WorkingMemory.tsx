import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Frame from "./Frame";

export default function WorkingMemory() {
  const { t } = useTranslation();
  const groups = t("figures.workingMemory.groups", {
    returnObjects: true,
  }) as string[];
  const [chunked, setChunked] = useState(false);

  const raw = groups.join("").split("");
  const count = chunked ? groups.length : raw.length;

  const Toggle = ({ on, label }: { on: boolean; label: string }) => (
    <button
      type="button"
      onClick={() => setChunked(on)}
      className="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors"
      style={{
        borderColor:
          chunked === on
            ? "color-mix(in srgb, var(--color-pink) 55%, var(--color-line))"
            : "var(--color-line)",
        background:
          chunked === on
            ? "color-mix(in srgb, var(--color-pink) 12%, transparent)"
            : "transparent",
        color: chunked === on ? "var(--color-pink)" : "var(--color-faint)",
      }}
    >
      {label}
    </button>
  );

  const chip = (txt: string, key: string, wide = false) => (
    <motion.span
      key={key}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.25 }}
      className={`flex items-center justify-center rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-surface)_85%,transparent)] font-mono text-text ${
        wide ? "px-3 py-2 text-base tracking-[0.2em]" : "h-9 w-9 text-sm"
      }`}
    >
      {txt}
    </motion.span>
  );

  return (
    <Frame
      title={t("figures.workingMemory.title")}
      caption={t("figures.workingMemory.caption")}
      footer={t("figures.workingMemory.note")}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-2">
          <Toggle on={false} label={t("figures.workingMemory.raw")} />
          <Toggle on={true} label={t("figures.workingMemory.chunked")} />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-display text-2xl font-bold"
            style={{
              color: count > 7 ? "var(--color-pink)" : "var(--color-aqua)",
            }}
          >
            {count}
          </span>
          <span className="font-mono text-[0.65rem] text-faint">
            {t("figures.workingMemory.limit")}
          </span>
        </div>
      </div>

      <div className="mt-5 flex min-h-[3rem] flex-wrap items-center gap-2">
        <AnimatePresence mode="popLayout">
          {chunked
            ? groups.map((g, i) => chip(g, `g${i}`, true))
            : raw.map((d, i) => chip(d, `r${i}`))}
        </AnimatePresence>
      </div>
    </Frame>
  );
}
