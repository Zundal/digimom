import { POSTS, type Post } from "../config/site";

/** Strip trailing digits: `homeRule1` → `homeRule`, `cheongyak3` → `cheongyak`. */
export function seriesPrefix(id: string) {
  return id.replace(/[0-9]+$/, "");
}

/** Part number for ordering within a series (`hello` → 0). */
export function seriesPart(id: string) {
  const m = id.match(/([0-9]+)$/);
  return m ? Number(m[1]) : 0;
}

const seriesCounts = POSTS.reduce<Record<string, number>>((acc, p) => {
  const prefix = seriesPrefix(p.id);
  acc[prefix] = (acc[prefix] ?? 0) + 1;
  return acc;
}, {});

export type WritingItem =
  | { kind: "single"; post: Post }
  | { kind: "series"; prefix: string; posts: Post[] };

/** Group multi-part series; leave standalone posts as singles. */
export const WRITING_ITEMS: WritingItem[] = (() => {
  const seen = new Set<string>();
  const items: WritingItem[] = [];

  for (const post of POSTS) {
    const prefix = seriesPrefix(post.id);
    if (seriesCounts[prefix] > 1) {
      if (seen.has(prefix)) continue;
      seen.add(prefix);
      const posts = POSTS.filter((p) => seriesPrefix(p.id) === prefix).sort(
        (a, b) => seriesPart(b.id) - seriesPart(a.id),
      );
      items.push({ kind: "series", prefix, posts });
    } else {
      items.push({ kind: "single", post });
    }
  }

  return items;
})();

export const WRITING_TAGS = ["all", ...Array.from(new Set(POSTS.map((p) => p.tag)))];
