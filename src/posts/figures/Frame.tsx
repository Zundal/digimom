import type { ReactNode } from "react";

// Shared presentational wrapper for every in-post infographic.
// Keeps titles, captions and the surrounding card visually consistent.
export default function Frame({
  title,
  caption,
  children,
  footer,
}: {
  title: string;
  caption?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <figure className="not-prose my-10 overflow-hidden rounded-2xl border border-line bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)]">
      <figcaption className="border-b border-line px-5 py-4 sm:px-6">
        <h3 className="font-display text-base font-semibold tracking-tight text-text sm:text-lg">
          {title}
        </h3>
        {caption && (
          <p className="mt-1 text-sm leading-relaxed text-muted">{caption}</p>
        )}
      </figcaption>

      <div className="px-4 py-6 sm:px-6 sm:py-7">{children}</div>

      {footer && (
        <div className="border-t border-line px-5 py-3.5 font-mono text-xs leading-relaxed text-faint sm:px-6">
          {footer}
        </div>
      )}
    </figure>
  );
}
