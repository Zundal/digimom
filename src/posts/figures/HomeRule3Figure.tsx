import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Step = {
  key: string;
  label: string;
  sub: string;
  star?: boolean;
};

export default function HomeRule3Figure() {
  const { t } = useTranslation();
  const steps = t("figures.homeRule3.steps", {
    returnObjects: true,
  }) as Step[];

  return (
    <Frame
      title={t("figures.homeRule3.title")}
      caption={t("figures.homeRule3.caption")}
      footer={t("figures.homeRule3.note")}
    >
      <ol className="relative flex flex-col gap-3 pl-9">
        <span
          aria-hidden
          className="absolute bottom-3 left-3 top-3 w-px bg-line"
        />
        {steps.map((step, i) => {
          const starred = !!step.star;
          const accent = starred ? "var(--color-pink)" : "var(--color-aqua)";
          return (
            <motion.li
              key={step.key}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute -left-9 top-1 flex h-6 w-6 items-center justify-center rounded-full border text-[0.65rem] font-bold"
                style={{
                  borderColor: `color-mix(in srgb, ${accent} 55%, var(--color-line))`,
                  background: `color-mix(in srgb, ${accent} 16%, var(--color-ink))`,
                  color: accent,
                }}
              >
                {starred ? "★" : i + 1}
              </span>
              <div
                className="rounded-xl border px-4 py-3"
                style={{
                  borderColor: starred
                    ? `color-mix(in srgb, ${accent} 45%, var(--color-line))`
                    : "var(--color-line)",
                  background: starred
                    ? `color-mix(in srgb, ${accent} 10%, transparent)`
                    : "color-mix(in srgb, var(--color-surface) 80%, transparent)",
                }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold tracking-tight text-text">
                    {step.label}
                  </span>
                  {starred && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[0.6rem] font-bold"
                      style={{
                        background: `color-mix(in srgb, ${accent} 18%, transparent)`,
                        color: accent,
                      }}
                    >
                      {t("figures.homeRule3.mostImportant")}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs leading-snug text-muted">
                  {step.sub}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Frame>
  );
}
