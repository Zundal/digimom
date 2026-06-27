import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { EXPERIENCE } from "../config/site";

const ACCENT: Record<string, string> = {
  violet: "var(--color-violet)",
  aqua: "var(--color-aqua)",
  pink: "var(--color-pink)",
};

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        index="02"
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
        subtitle={t("experience.subtitle")}
      />

      {/* Vertical timeline. */}
      <ol className="relative border-l border-line pl-6 sm:pl-10">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.id} delay={i * 0.06}>
            <li className="relative pb-12 last:pb-0">
              {/* Node on the line. */}
              <span
                className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-ink sm:-left-[2.6rem]"
                style={{ background: ACCENT[e.accent] }}
                aria-hidden
              />
              {e.current && (
                <span
                  className="absolute -left-[1.6rem] top-1.5 h-3 w-3 animate-ping rounded-full sm:-left-[2.6rem]"
                  style={{ background: ACCENT[e.accent], opacity: 0.5 }}
                  aria-hidden
                />
              )}

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {t(`experience.items.${e.id}.company`)}
                </h3>
                {e.current && (
                  <span
                    className="rounded-full px-2 py-0.5 font-mono text-[0.6rem] tracking-widest"
                    style={{
                      color: ACCENT[e.accent],
                      background: `color-mix(in srgb, ${ACCENT[e.accent]} 14%, transparent)`,
                    }}
                  >
                    {t("experience.present")}
                  </span>
                )}
              </div>

              <p className="mt-1 flex flex-wrap items-center gap-x-3 font-mono text-xs text-faint">
                <span>{t(`experience.items.${e.id}.period`)}</span>
                <span className="text-line">·</span>
                <span className="text-muted">
                  {t(`experience.items.${e.id}.role`)}
                </span>
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                {t(`experience.items.${e.id}.summary`)}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] text-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
