import { useTranslation } from "react-i18next";
import Frame from "./Frame";

type Point = {
  key: string;
  name: string;
  risk: string;
  ret: string;
};

const MARKERS = [
  { key: "stock", cx: 280, cy: 60, color: "#ff6fb5", anchor: "end" as const, lx: 262 },
  { key: "etf", cx: 180, cy: 110, color: "#36e0c8", anchor: "start" as const, lx: 198 },
  { key: "els", cx: 120, cy: 160, color: "#7c5cff", anchor: "start" as const, lx: 138 },
];

export default function Invest4Figure() {
  const { t } = useTranslation();
  const points = t("figures.invest4.points", {
    returnObjects: true,
  }) as Point[];
  const byKey = (key: string) => points.find((p) => p.key === key);

  return (
    <Frame
      title={t("figures.invest4.title")}
      caption={t("figures.invest4.caption")}
      footer={t("figures.invest4.note")}
    >
      <svg viewBox="0 0 360 260" className="w-full" role="img">
        {[95, 150, 205].map((x) => (
          <line
            key={`v${x}`}
            x1={x}
            y1={30}
            x2={x}
            y2={220}
            stroke="var(--color-line)"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
        ))}
        {[70, 120, 170].map((y) => (
          <line
            key={`h${y}`}
            x1={40}
            y1={y}
            x2={340}
            y2={y}
            stroke="var(--color-line)"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
        ))}
        <line
          x1={40}
          y1={220}
          x2={340}
          y2={220}
          stroke="var(--color-faint)"
          strokeWidth="1.5"
        />
        <line
          x1={40}
          y1={220}
          x2={40}
          y2={30}
          stroke="var(--color-faint)"
          strokeWidth="1.5"
        />
        <polygon points="340,220 331,215 331,225" fill="var(--color-faint)" />
        <polygon points="40,30 35,39 45,39" fill="var(--color-faint)" />

        {MARKERS.map((m, i) => {
          const pt = byKey(m.key);
          const name = pt?.name ?? m.key;
          const ret = pt?.ret ?? "";
          return (
            <g key={m.key}>
              <circle cx={m.cx} cy={m.cy} r="10" fill={m.color} />
              <text
                x={m.cx}
                y={m.cy + 4}
                textAnchor="middle"
                className="font-mono"
                fontSize={12}
                fontWeight="700"
                fill="#ffffff"
              >
                {i + 1}
              </text>
              <text
                x={m.lx}
                y={m.cy - 3}
                textAnchor={m.anchor}
                fontSize={15}
                fontWeight="700"
                fill="var(--color-text)"
              >
                {name}
              </text>
              <text
                x={m.lx}
                y={m.cy + 14}
                textAnchor={m.anchor}
                fontSize={13}
                fontWeight="500"
                fill={m.color}
              >
                {ret}
              </text>
            </g>
          );
        })}

        <text
          x={190}
          y={246}
          textAnchor="middle"
          fontSize={14}
          fill="var(--color-muted)"
        >
          {t("figures.invest4.xLabel")} →
        </text>
        <text
          x={16}
          y={125}
          textAnchor="middle"
          fontSize={14}
          fill="var(--color-muted)"
          transform="rotate(-90 16 125)"
        >
          {t("figures.invest4.yLabel")} →
        </text>
      </svg>

      <div className="mt-5 grid grid-cols-1 gap-3 border-t border-line pt-4 sm:grid-cols-3">
        {MARKERS.map((m, i) => {
          const pt = byKey(m.key);
          return (
            <div
              key={m.key}
              className="flex items-start gap-3 rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-surface)_80%,transparent)] px-3.5 py-3"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold"
                style={{
                  background: `color-mix(in srgb, ${m.color} 20%, transparent)`,
                  color: m.color,
                }}
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base font-semibold text-text">
                    {pt?.name ?? m.key}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 text-sm font-semibold"
                    style={{
                      background: `color-mix(in srgb, ${m.color} 16%, transparent)`,
                      color: m.color,
                    }}
                  >
                    {pt?.risk}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{pt?.ret}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
