import { useTranslation } from "react-i18next";
import Frame from "./Frame";

type Side = { label: string; sub: string; ex: string };

export default function CheongyakRank() {
  const { t } = useTranslation();
  const first = t("figures.cheongyakRank.first", {
    returnObjects: true,
  }) as Side;
  const second = t("figures.cheongyakRank.second", {
    returnObjects: true,
  }) as Side;

  const Card = ({
    side,
    accent,
    badge,
  }: {
    side: Side;
    accent: string;
    badge: string;
  }) => (
    <div
      className="flex-1 rounded-xl border p-4"
      style={{
        borderColor: `color-mix(in srgb, ${accent} 45%, var(--color-line))`,
        background: `color-mix(in srgb, ${accent} 9%, transparent)`,
      }}
    >
      <div
        className="font-mono text-[0.65rem] uppercase tracking-widest"
        style={{ color: accent }}
      >
        {badge}
      </div>
      <div className="mt-1.5 text-sm font-semibold text-text">{side.label}</div>
      <div className="mt-1 text-xs leading-snug text-muted">{side.sub}</div>
      <div className="mt-3 rounded-lg bg-[color-mix(in_srgb,var(--color-ink)_45%,transparent)] px-3 py-2 font-mono text-[0.7rem] leading-snug text-text/80">
        {side.ex}
      </div>
    </div>
  );

  return (
    <Frame
      title={t("figures.cheongyakRank.title")}
      caption={t("figures.cheongyakRank.caption")}
      footer={t("figures.cheongyakRank.note")}
    >
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Card side={first} accent="var(--color-aqua)" badge="1st" />
        <span aria-hidden className="shrink-0 text-center text-faint">
          →
        </span>
        <Card side={second} accent="var(--color-pink)" badge="2nd" />
      </div>
    </Frame>
  );
}
