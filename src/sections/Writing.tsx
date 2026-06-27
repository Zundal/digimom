import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { POSTS } from "../config/site";

export default function Writing() {
  const { t, i18n } = useTranslation();

  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat(i18n.resolvedLanguage, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));

  return (
    <section id="writing" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow={t("writing.eyebrow")}
        title={t("writing.title")}
        subtitle={t("writing.subtitle")}
      />

      <ul className="border-t border-line">
        {POSTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <li className="border-b border-line">
              <Link
                to={`/post/${p.id}`}
                className="group grid gap-2 py-7 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-xs text-faint sm:w-28">
                  {fmtDate(p.date)}
                </span>

                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-aqua sm:text-2xl">
                    {t(`posts.${p.id}.title`)}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {t(`posts.${p.id}.excerpt`)}
                  </p>
                </div>

                <span className="flex items-center gap-3 text-xs text-faint sm:flex-col sm:items-end">
                  <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem]">
                    {t(`writing.tags.${p.tag}`)}
                  </span>
                  <span className="font-mono">
                    {p.readingMin} {t("writing.min")}
                  </span>
                </span>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
