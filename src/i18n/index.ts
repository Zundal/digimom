import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ko from "./locales/ko";
import en from "./locales/en";
import ja from "./locales/ja";
import zh from "./locales/zh";

export const SUPPORTED = ["ko", "en", "ja", "zh"] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en },
      ja: { translation: ja },
      zh: { translation: zh },
    },
    fallbackLng: "en",
    supportedLngs: SUPPORTED as unknown as string[],
    nonExplicitSupportedLngs: true, // ko-KR -> ko
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
  });

// Keep <html lang> in sync for a11y + SEO.
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
