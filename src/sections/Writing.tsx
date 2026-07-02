import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { type Post } from "../config/site";
import { WRITING_ITEMS, WRITING_TAGS } from "../lib/posts";

export default function Writing() {
  const { t, i18n } = useTranslation();
  const [activeTag, setActiveTag] = useState("all");
  const [query, setQuery] = useState("");

  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat(i18n.resolvedLanguage, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));

  const q = query.trim().toLowerCase();

  const matchesTag = (post: Post) => activeTag === "all" || post.tag === activeTag;

  const matchesQuery = (post: Post) => {
    if (!q) return true;
    const title = t(`posts.${post.id}.title`).toLowerCase();
    const excerpt = t(`posts.${post.id}.excerpt`).toLowerCase();
    return title.includes(q) || excerpt.includes(q);
  };

  const entries = useMemo(() => {
    const rows: { item: (typeof WRITING_ITEMS)[number]; posts: Post[] }[] = [];

    for (const item of WRITING_ITEMS) {
      if (item.kind === "single") {
        if (matchesTag(item.post) && matchesQuery(item.post)) {
          rows.push({ item, posts: [item.post] });
        }
        continue;
      }

      if (activeTag !== "all" && item.posts[0].tag !== activeTag) continue;

      const seriesTitle = t(`writing.series.${item.prefix}.title`, {
        defaultValue: "",
      });
      const seriesDesc = t(`writing.series.${item.prefix}.desc`, {
        defaultValue: "",
      });
      const byQuery =
        !q ||
        seriesTitle.toLowerCase().includes(q) ||
        seriesDesc.toLowerCase().includes(q)
          ? item.posts
          : item.posts.filter(matchesQuery);

      if (byQuery.length) rows.push({ item, posts: byQuery });
    }

    return rows;
  }, [activeTag, q, t, i18n.resolvedLanguage]);

  return (
    <section id="writing" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        index="01"
        eyebrow={t("writing.eyebrow")}
        title={t("writing.title")}
        subtitle={t("writing.subtitle")}
      />

      <div className="mb-8 flex flex-col gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("writing.searchPlaceholder")}
          className="w-full rounded-lg border border-line bg-transparent px-4 py-2.5 text-sm text-text placeholder:text-faint focus:border-[color-mix(in_srgb,var(--color-aqua)_50%,var(--color-line))] focus:outline-none sm:max-w-xs"
        />

        <div className="flex flex-wrap gap-2">
          {WRITING_TAGS.map((tag) => {
            const on = tag === activeTag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors"
                style={{
                  borderColor: on
                    ? "color-mix(in srgb, var(--color-aqua) 55%, var(--color-line))"
                    : "var(--color-line)",
                  background: on
                    ? "color-mix(in srgb, var(--color-aqua) 12%, transparent)"
                    : "transparent",
                  color: on ? "var(--color-text)" : "var(--color-muted)",
                }}
              >
                {tag === "all"
                  ? t("writing.all")
                  : t(`writing.tags.${tag}`)}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="border-t border-line">
        {entries.length === 0 ? (
          <li className="border-b border-line py-12 text-center text-sm text-muted">
            {t("writing.empty")}
          </li>
        ) : (
          entries.map(({ item, posts }, i) => (
            <Reveal key={item.kind === "series" ? item.prefix : item.post.id} delay={i * 0.06}>
              {item.kind === "series" ? (
                <li className="border-b border-line py-7">
                  <div className="mb-4">
                    <p className="font-mono text-xs text-faint">
                      {t("writing.seriesCount", { n: posts.length })}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-medium tracking-tight sm:text-2xl">
                      {t(`writing.series.${item.prefix}.title`)}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {t(`writing.series.${item.prefix}.desc`)}
                    </p>
                  </div>
                  <ul className="space-y-1 border-l border-line pl-4">
                    {posts.map((p) => (
                      <li key={p.id}>
                        <Link
                          to={`/post/${p.id}`}
                          className="group flex flex-wrap items-baseline justify-between gap-2 py-2.5 transition-colors"
                        >
                          <span className="text-sm font-medium transition-colors group-hover:text-aqua">
                            {t(`posts.${p.id}.title`)}
                          </span>
                          <span className="font-mono text-xs text-faint">
                            {fmtDate(p.date)} · {p.readingMin} {t("writing.min")}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="border-b border-line">
                  <Link
                    to={`/post/${posts[0].id}`}
                    className="group grid gap-2 py-7 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-mono text-xs text-faint sm:w-28">
                      {fmtDate(posts[0].date)}
                    </span>

                    <div>
                      <h3 className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-aqua sm:text-2xl">
                        {t(`posts.${posts[0].id}.title`)}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                        {t(`posts.${posts[0].id}.excerpt`)}
                      </p>
                    </div>

                    <span className="flex items-center gap-3 text-xs text-faint sm:flex-col sm:items-end">
                      <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem]">
                        {t(`writing.tags.${posts[0].tag}`)}
                      </span>
                      <span className="font-mono">
                        {posts[0].readingMin} {t("writing.min")}
                      </span>
                    </span>
                  </Link>
                </li>
              )}
            </Reveal>
          ))
        )}
      </ul>
    </section>
  );
}
