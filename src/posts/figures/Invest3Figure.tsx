import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Item = {
  key: string;
  name: string;
  desc: string;
  safety: number;
  yield: number;
  liquidity: number;
};

const SCORE_FIELDS = [
  { field: "safety" as const, accent: "var(--color-aqua)" },
  { field: "yield" as const, accent: "var(--color-pink)" },
  { field: "liquidity" as const, accent: "var(--color-violet)" },
];

function ScoreDots({ score, accent }: { score: number; accent: string }) {
  return (
    <span className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className="h-1.5 w-1.5 rounded-full"
          style={{
            background:
              n <= score
                ? accent
                : "color-mix(in srgb, var(--color-line) 90%, transparent)",
          }}
        />
      ))}
    </span>
  );
}

export default function Invest3Figure() {
  const { t } = useTranslation();
  const items = t("figures.invest3.items", {
    returnObjects: true,
  }) as Item[];
  const cols = t("figures.invest3.cols", { returnObjects: true }) as Record<
    "safety" | "yield" | "liquidity",
    string
  >;

  return (
    <Frame
      title={t("figures.invest3.title")}
      caption={t("figures.invest3.caption")}
      footer={t("figures.invest3.note")}
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            className="flex flex-col gap-3 rounded-xl border border-line bg-[color-mix(in_srgb,var(--color-surface)_85%,transparent)] px-3.5 py-3.5"
          >
            <div>
              <p className="text-sm font-semibold tracking-tight text-text">
                {item.name}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-muted">
                {item.desc}
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              {SCORE_FIELDS.map(({ field, accent }) => (
                <div key={field} className="flex flex-col gap-1">
                  <span className="text-[0.65rem] text-faint">
                    {cols[field]}
                  </span>
                  <ScoreDots score={item[field]} accent={accent} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}
