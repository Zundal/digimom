import { useTranslation } from "react-i18next";
import Frame from "./Frame";

type Side = { label: string; sub: string; ex: string };

export default function BottomUpTopDown() {
  const { t } = useTranslation();
  const bottomUp = t("figures.bottomUpTopDown.bottomUp", {
    returnObjects: true,
  }) as Side;
  const topDown = t("figures.bottomUpTopDown.topDown", {
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
      title={t("figures.bottomUpTopDown.title")}
      caption={t("figures.bottomUpTopDown.caption")}
      footer={t("figures.bottomUpTopDown.note")}
    >
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Card side={bottomUp} accent="var(--color-aqua)" badge="↑ bottom-up" />

        <div className="flex shrink-0 items-center justify-center sm:flex-col">
          <span aria-hidden className="text-faint sm:hidden">
            ↓
          </span>
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full border text-sm font-semibold"
            style={{
              borderColor: "color-mix(in srgb, var(--color-violet) 60%, var(--color-line))",
              background: "color-mix(in srgb, var(--color-violet) 16%, transparent)",
              color: "var(--color-text)",
            }}
          >
            {t("figures.bottomUpTopDown.center")}
          </div>
          <span aria-hidden className="text-faint sm:hidden">
            ↑
          </span>
        </div>

        <Card side={topDown} accent="var(--color-pink)" badge="↓ top-down" />
      </div>
    </Frame>
  );
}
