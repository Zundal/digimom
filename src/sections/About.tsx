import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function About() {
  const { t } = useTranslation();
  const facts = t("about.facts", { returnObjects: true }) as {
    k: string;
    v: string;
  }[];

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        index="01"
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
      />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.05}>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="divide-y divide-line border-t border-line">
            {facts.map((f) => (
              <div
                key={f.k}
                className="flex items-center justify-between gap-4 py-4"
              >
                <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                  {f.k}
                </dt>
                <dd className="text-right text-sm text-text">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
