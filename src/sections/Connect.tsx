import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { SITE, SOCIALS } from "../config/site";

export default function Connect() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = SITE.links.email;
    }
  };

  return (
    <section id="connect" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        index="06"
        eyebrow={t("connect.eyebrow")}
        title={t("connect.title")}
        subtitle={t("connect.subtitle")}
      />

      <Reveal delay={0.05}>
        <div className="grid gap-3 sm:grid-cols-3">
          {SOCIALS.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target={s.key === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="card group flex items-center justify-between rounded-2xl px-6 py-5"
            >
              <span className="font-display text-lg font-medium">{s.label}</span>
              <span
                aria-hidden
                className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-aqua"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-surface/40 px-6 py-5">
          <span className="font-mono text-sm text-muted">{SITE.email}</span>
          <button
            onClick={copyEmail}
            className="ml-auto rounded-full border border-line px-4 py-2 text-xs font-medium text-text transition-colors hover:border-aqua hover:text-aqua"
          >
            {copied ? t("connect.copied") : t("connect.copy")}
          </button>
        </div>
      </Reveal>
    </section>
  );
}
