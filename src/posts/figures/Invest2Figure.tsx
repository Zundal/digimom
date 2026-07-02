import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Cell = { key: string; asset: string };

const ACCENTS = [
  "var(--color-violet)",
  "var(--color-aqua)",
  "var(--color-pink)",
  "var(--color-aqua)",
];

function MatrixCell({
  cell,
  accent,
  delay,
}: {
  cell: Cell;
  accent: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      className="flex min-h-[3.5rem] items-center justify-center rounded-xl border px-3 py-3 text-center text-sm font-medium"
      style={{
        borderColor: `color-mix(in srgb, ${accent} 45%, var(--color-line))`,
        background: `color-mix(in srgb, ${accent} 10%, transparent)`,
        color: "var(--color-text)",
      }}
    >
      {cell.asset}
    </motion.div>
  );
}

export default function Invest2Figure() {
  const { t } = useTranslation();
  const cells = t("figures.invest2.cells", {
    returnObjects: true,
  }) as Cell[];

  return (
    <Frame
      title={t("figures.invest2.title")}
      caption={t("figures.invest2.caption")}
      footer={t("figures.invest2.note")}
    >
      <div className="grid grid-cols-[auto_1fr_1fr] gap-2">
        <div />
        <div className="pb-0.5 text-center text-xs font-semibold text-faint">
          {t("figures.invest2.fxStrong")}
        </div>
        <div className="pb-0.5 text-center text-xs font-semibold text-faint">
          {t("figures.invest2.fxWeak")}
        </div>

        <div className="flex items-center justify-center pr-1 text-center text-xs font-semibold text-faint [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]">
          {t("figures.invest2.rateUp")}
        </div>
        {[0, 1].map((i) => (
          <MatrixCell
            key={cells[i].key}
            cell={cells[i]}
            accent={ACCENTS[i]}
            delay={i * 0.1}
          />
        ))}

        <div className="flex items-center justify-center pr-1 text-center text-xs font-semibold text-faint [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]">
          {t("figures.invest2.rateDown")}
        </div>
        {[2, 3].map((i) => (
          <MatrixCell
            key={cells[i].key}
            cell={cells[i]}
            accent={ACCENTS[i]}
            delay={i * 0.1}
          />
        ))}
      </div>
    </Frame>
  );
}
