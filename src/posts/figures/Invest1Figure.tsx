import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Frame from "./Frame";

type Stage = { key: string; phase: string; asset: string };

const COLORS = [
  "var(--color-aqua)",
  "var(--color-violet)",
  "var(--color-pink)",
  "var(--color-faint)",
];

const CX = 100;
const CY = 100;
const R_OUTER = 82;
const R_INNER = 50;

function arcPath(startDeg: number, endDeg: number) {
  const polar = (r: number, deg: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
  };
  const [x1, y1] = polar(R_OUTER, startDeg);
  const [x2, y2] = polar(R_OUTER, endDeg);
  const [x3, y3] = polar(R_INNER, endDeg);
  const [x4, y4] = polar(R_INNER, startDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${R_OUTER} ${R_OUTER} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${R_INNER} ${R_INNER} 0 ${large} 0 ${x4} ${y4} Z`;
}

function labelPos(index: number) {
  const deg = (index * 90 + 45 - 90) * (Math.PI / 180);
  const r = (R_OUTER + R_INNER) / 2;
  return [CX + r * Math.cos(deg), CY + r * Math.sin(deg)];
}

export default function Invest1Figure() {
  const { t } = useTranslation();
  const stages = t("figures.invest1.stages", {
    returnObjects: true,
  }) as Stage[];

  return (
    <Frame
      title={t("figures.invest1.title")}
      caption={t("figures.invest1.caption")}
      footer={t("figures.invest1.note")}
    >
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-7">
        <svg
          viewBox="0 0 200 200"
          className="w-40 shrink-0 sm:w-48"
          aria-hidden
        >
          {stages.map((stage, i) => (
            <motion.path
              key={stage.key}
              d={arcPath(i * 90 + 2, i * 90 + 88)}
              fill={`color-mix(in srgb, ${COLORS[i]} 22%, transparent)`}
              stroke={COLORS[i]}
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            />
          ))}
          {stages.map((stage, i) => {
            const [x, y] = labelPos(i);
            return (
              <text
                key={stage.key}
                x={x}
                y={y + 4}
                textAnchor="middle"
                className="font-mono"
                fontSize="12"
                fontWeight="700"
                fill={COLORS[i]}
              >
                {i + 1}
              </text>
            );
          })}
          <text
            x={CX}
            y={CY - 2}
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted)"
          >
            {t("figures.invest1.center")}
          </text>
          <text x={CX} y={CY + 14} textAnchor="middle" fontSize="14">
            ↻
          </text>
        </svg>

        <ol className="grid w-full grid-cols-2 gap-2.5 sm:grid-cols-1">
          {stages.map((stage, i) => (
            <motion.li
              key={stage.key}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="flex items-start gap-2.5 rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-surface)_80%,transparent)] px-3 py-2"
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[0.65rem] font-bold"
                style={{
                  background: `color-mix(in srgb, ${COLORS[i]} 18%, transparent)`,
                  color: COLORS[i],
                }}
              >
                {i + 1}
              </span>
              <span className="leading-snug">
                <span className="text-sm font-semibold text-text">
                  {stage.phase}
                </span>
                <span className="mt-0.5 block text-xs text-muted">
                  {stage.asset}
                </span>
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </Frame>
  );
}
