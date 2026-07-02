import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Item = {
  key: string;
  name: string;
  full: string;
  metric: string;
  gist: string;
  detail: string;
};

const ACCENTS = [
  "var(--color-violet)",
  "var(--color-aqua)",
  "var(--color-pink)",
];

export default function HomeRule1Figure() {
  const { t } = useTranslation();
  const items = t("figures.homeRule1.items", {
    returnObjects: true,
  }) as Item[];

  return (
    <Frame
      title={t("figures.homeRule1.title")}
      caption={t("figures.homeRule1.caption")}
      footer={t("figures.homeRule1.note")}
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {items.map((item, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative flex flex-col gap-2 overflow-hidden rounded-xl border border-line bg-[color-mix(in_srgb,var(--color-surface)_85%,transparent)] px-4 pb-4 pt-5"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: accent }}
              />
              <div>
                <span
                  className="font-display text-xl font-bold tracking-tight"
                  style={{ color: accent }}
                >
                  {item.name}
                </span>
                <p className="mt-0.5 text-xs text-faint">{item.full}</p>
              </div>
              <span
                className="w-fit rounded-full px-2.5 py-1 text-xs font-semibold"
                style={{
                  background: `color-mix(in srgb, ${accent} 14%, transparent)`,
                  color: accent,
                }}
              >
                {item.metric}
              </span>
              <p className="text-sm font-medium text-text">{item.gist}</p>
              <p className="text-xs leading-snug text-muted">{item.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </Frame>
  );
}
