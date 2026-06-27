import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LOCALES } from "../config/site";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    LOCALES.find((l) => i18n.resolvedLanguage === l.code) ?? LOCALES[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-xs tracking-widest text-muted transition-colors hover:border-violet hover:text-text"
      >
        <span aria-hidden>◍</span>
        {current.short}
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-xl border border-line bg-surface/95 backdrop-blur-lg"
        >
          {LOCALES.map((l) => {
            const active = l.code === current.code;
            return (
              <li key={l.code} role="option" aria-selected={active}>
                <button
                  onClick={() => {
                    i18n.changeLanguage(l.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-surface-2 ${
                    active ? "text-aqua" : "text-muted"
                  }`}
                >
                  {l.label}
                  <span className="font-mono text-[0.65rem] tracking-widest text-faint">
                    {l.short}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
