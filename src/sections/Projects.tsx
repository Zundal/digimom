import { useRef } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { ACCENT_COLOR, PROJECTS, type Project } from "../config/site";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

function ProjectCard({ p }: { p: Project }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width;
    const my = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${mx * 100}%`);
    el.style.setProperty("--my", `${my * 100}%`);
    el.style.transform = `perspective(900px) rotateY(${(mx - 0.5) * 9}deg) rotateX(${(0.5 - my) * 9}deg) translateY(-4px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="card-tilt group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
    >
      {/* Cursor-following accent sheen. */}
      <span
        aria-hidden
        className="card-sheen"
        style={{ ["--accent" as string]: ACCENT_COLOR[p.accent] } as React.CSSProperties}
      />

      <div className="relative mb-6 flex items-center justify-between">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: ACCENT_COLOR[p.accent] }}
          aria-hidden
        />
        <span className="font-mono text-xs text-faint">{p.year}</span>
      </div>

      <h3 className="relative font-display text-xl font-semibold tracking-tight">
        {t(`projects.items.${p.id}.name`)}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
        {t(`projects.items.${p.id}.desc`)}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] text-faint"
          >
            {s}
          </span>
        ))}
      </div>

      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text">
        {t("projects.visit")}
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </a>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
