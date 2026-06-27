import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Scene = lazy(() => import("../three/Scene"));

export default function Hero() {
  const { t } = useTranslation();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* 3D signature, lazy + suspended so first paint isn't blocked. */}
      <div className="absolute inset-0" aria-hidden>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        {/* Vignette so type stays legible over the orb. */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_30%,var(--color-ink)_92%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-6"
        >
          {t("hero.eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
        >
          {t("hero.name")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="aurora-text mt-3 font-display text-[clamp(1.25rem,3.5vw,2.25rem)] font-medium"
        >
          {t("hero.role")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="rounded-full bg-text px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-95"
          >
            {t("hero.ctaProjects")}
          </button>
          <button
            onClick={() => scrollTo("connect")}
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-text transition-colors hover:border-aqua hover:text-aqua"
          >
            {t("hero.ctaContact")}
          </button>
        </motion.div>
      </div>

      {/* Scroll cue. */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 font-mono text-[0.6rem] tracking-[0.3em] text-faint"
        aria-label={t("hero.scroll")}
      >
        <span className="flex flex-col items-center gap-2">
          {t("hero.scroll")}
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="block h-8 w-px bg-gradient-to-b from-faint to-transparent"
          />
        </span>
      </motion.button>
    </section>
  );
}
