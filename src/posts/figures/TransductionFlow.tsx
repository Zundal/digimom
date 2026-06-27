import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type Step = { label: string; sub: string };

export default function TransductionFlow() {
  const { t } = useTranslation();
  const reduced = usePrefersReducedMotion();
  const steps = t("figures.transduction.steps", {
    returnObjects: true,
  }) as Step[];

  return (
    <Frame
      title={t("figures.transduction.title")}
      caption={t("figures.transduction.caption")}
      footer={t("figures.transduction.note")}
    >
      <ol className="flex flex-col gap-2.5 sm:flex-row sm:items-stretch sm:gap-1">
        {steps.map((s, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 sm:flex-1 sm:flex-col sm:gap-2"
          >
            <motion.div
              className="relative flex h-full min-w-[3.25rem] flex-1 flex-col justify-center rounded-xl border border-line bg-[color-mix(in_srgb,var(--color-surface)_85%,transparent)] px-3.5 py-3 sm:w-full"
              animate={
                reduced
                  ? undefined
                  : {
                      borderColor: [
                        "var(--color-line)",
                        "color-mix(in srgb, var(--color-aqua) 60%, var(--color-line))",
                        "var(--color-line)",
                      ],
                    }
              }
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.32,
              }}
            >
              <span className="font-mono text-[0.6rem] text-faint">
                0{i + 1}
              </span>
              <span className="mt-0.5 text-sm font-semibold tracking-tight text-text">
                {s.label}
              </span>
              <span className="mt-0.5 text-xs leading-snug text-muted">
                {s.sub}
              </span>
            </motion.div>

            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="shrink-0 rotate-90 text-faint sm:rotate-0"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </Frame>
  );
}
