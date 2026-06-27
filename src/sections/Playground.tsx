import { Suspense, lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";

const PlaygroundScene = lazy(() => import("../three/PlaygroundScene"));

const SHAPES = ["sphere", "torus", "wave"] as const;

export default function Playground() {
  const { t } = useTranslation();
  const [shape, setShape] = useState(0);

  return (
    <section id="playground" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow={t("playground.eyebrow")}
        title={t("playground.title")}
        subtitle={t("playground.subtitle")}
      />

      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/30">
        {/* The interactive particle object. */}
        <div className="h-[clamp(20rem,55vh,32rem)] w-full">
          <Suspense fallback={null}>
            <PlaygroundScene onCycle={setShape} />
          </Suspense>
        </div>

        {/* Hint + current shape readout. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
          <p className="font-mono text-xs text-faint">{t("playground.hint")}</p>
          <div className="flex items-center gap-2">
            {SHAPES.map((s, i) => (
              <span
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === shape ? "w-6 bg-aqua" : "w-1.5 bg-line"
                }`}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
