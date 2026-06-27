import { useTranslation } from "react-i18next";
import { SITE, SOCIALS } from "../config/site";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <span className="aurora-text font-display text-base font-bold tracking-tight">
            {SITE.handle}
          </span>
          <p className="mt-1 text-xs text-faint">{t("footer.built")}</p>
        </div>

        <div className="flex items-center gap-5">
          {SOCIALS.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target={s.key === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="link-underline text-sm text-muted transition-colors hover:text-text"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-faint">
          © {year} {SITE.handle}. {t("footer.rights")}.
        </p>
      </div>
    </footer>
  );
}
