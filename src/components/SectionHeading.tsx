import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  index,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  index: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-violet">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.85rem,4.5vw,3rem)] font-semibold leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
