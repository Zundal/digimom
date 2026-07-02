import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Scenario = {
  key: string;
  name: string;
  cash: number;
  safe: number;
  growth: number;
};

const FIELDS = [
  { field: "cash" as const, color: "var(--color-faint)" },
  { field: "safe" as const, color: "var(--color-aqua)" },
  { field: "growth" as const, color: "var(--color-pink)" },
];

function pieArc(startDeg: number, endDeg: number) {
  const polar = (r: number, deg: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return [50 + r * Math.cos(rad), 50 + r * Math.sin(rad)];
  };
  const [x1, y1] = polar(42, startDeg);
  const [x2, y2] = polar(42, endDeg);
  const [x3, y3] = polar(24, endDeg);
  const [x4, y4] = polar(24, startDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A 42 42 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A 24 24 0 ${large} 0 ${x4} ${y4} Z`;
}

function ScenarioPie({
  scenario,
  index,
}: {
  scenario: Scenario;
  index: number;
}) {
  let cursor = 0;
  const slices = FIELDS.map(({ field, color }) => {
    const pct = scenario[field];
    const start = (cursor / 100) * 360;
    cursor += pct;
    const end = (cursor / 100) * 360;
    return { color, d: pieArc(start, end) };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="flex flex-col items-center gap-2"
    >
      <svg viewBox="0 0 100 100" className="w-24 sm:w-28" aria-hidden>
        {slices.map((slice, i) => (
          <path key={i} d={slice.d} fill={slice.color} />
        ))}
      </svg>
      <p className="text-sm font-semibold text-text">{scenario.name}</p>
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-0.5 text-[0.65rem] text-muted">
        {FIELDS.map(({ field, color }) => (
          <span key={field} className="inline-flex items-center gap-1">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: color }}
            />
            {scenario[field]}%
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Invest5Figure() {
  const { t } = useTranslation();
  const scenarios = t("figures.invest5.scenarios", {
    returnObjects: true,
  }) as Scenario[];
  const legend = t("figures.invest5.legend", {
    returnObjects: true,
  }) as Record<"cash" | "safe" | "growth", string>;

  return (
    <Frame
      title={t("figures.invest5.title")}
      caption={t("figures.invest5.caption")}
      footer={t("figures.invest5.note")}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {scenarios.map((scenario, i) => (
          <ScenarioPie key={scenario.key} scenario={scenario} index={i} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1.5 border-t border-line pt-4 text-xs text-muted">
        {FIELDS.map(({ field, color }) => (
          <span key={field} className="inline-flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: color }}
            />
            {legend[field]}
          </span>
        ))}
      </div>
    </Frame>
  );
}
