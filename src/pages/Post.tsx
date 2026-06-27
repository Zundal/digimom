import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { POSTS } from "../config/site";

export default function Post() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const post = POSTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat(i18n.resolvedLanguage, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));

  if (!post) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
        <p className="text-muted">{t("post.notFound")}</p>
        <Link
          to="/"
          className="mt-4 text-sm text-aqua link-underline"
        >
          ← {t("post.back")}
        </Link>
      </main>
    );
  }

  const body = t(`posts.${post.id}.body`, { returnObjects: true }) as string[];

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="mx-auto max-w-3xl px-5 pb-28 pt-32 sm:px-8"
    >
      <Link
        to="/"
        className="link-underline inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-faint transition-colors hover:text-text"
      >
        ← {t("post.back")}
      </Link>

      <div className="mt-10 flex items-center gap-3 font-mono text-xs text-faint">
        <span className="rounded-full border border-line px-2.5 py-1">
          {t(`writing.tags.${post.tag}`)}
        </span>
        <span>
          {t("post.published")} · {fmtDate(post.date)}
        </span>
        <span>
          {post.readingMin} {t("post.min")}
        </span>
      </div>

      <h1 className="mt-6 font-display text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[1.05] tracking-tight">
        {t(`posts.${post.id}.title`)}
      </h1>

      <p className="mt-5 border-l-2 border-violet pl-4 text-lg italic leading-relaxed text-muted">
        {t(`posts.${post.id}.excerpt`)}
      </p>

      <div className="mt-10 space-y-6 text-lg leading-[1.85] text-text/90">
        {body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-16 hairline" />
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-1.5 text-sm text-aqua link-underline"
      >
        ← {t("post.back")}
      </Link>
    </motion.main>
  );
}
