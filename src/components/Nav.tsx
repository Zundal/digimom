import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { SITE } from "../config/site";
import LanguageSwitcher from "./LanguageSwitcher";

const SECTIONS = [
  "about",
  "experience",
  "projects",
  "writing",
  "connect",
] as const;

export default function Nav() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for home to mount before scrolling.
      setTimeout(scroll, 80);
    } else {
      scroll();
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => {
            if (location.pathname !== "/") navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span className="aurora-text font-display text-lg font-bold tracking-tight">
            {SITE.handle}
          </span>
          <span className="hidden font-mono text-[0.6rem] tracking-[0.3em] text-faint sm:inline">
            BLOG
          </span>
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="mr-1 hidden items-center gap-1 md:flex">
            {SECTIONS.map((s) => (
              <li key={s}>
                <button
                  onClick={() => goTo(s)}
                  className="link-underline px-3 py-1.5 text-sm text-muted transition-colors hover:text-text"
                >
                  {t(`nav.${s}`)}
                </button>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
