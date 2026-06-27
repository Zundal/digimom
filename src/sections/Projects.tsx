import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../config/site";

const ACCENT: Record<string, string> = {
  violet: "var(--color-violet)",
  aqua: "var(--color-aqua)",
  pink: "var(--color-pink)",
};

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        index="02"
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col rounded-2xl p-6"
              style={
                { ["--tw-shadow-color" as string]: ACCENT[p.accent] } as React.CSSProperties
              }
            >
              <div className="mb-6 flex items-center justify-between">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: ACCENT[p.accent] }}
                  aria-hidden
                />
                <span className="font-mono text-xs text-faint">{p.year}</span>
              </div>

              <h3 className="font-display text-xl font-semibold tracking-tight">
                {t(`projects.items.${p.id}.name`)}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {t(`projects.items.${p.id}.desc`)}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] text-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text">
                {t("projects.visit")}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
