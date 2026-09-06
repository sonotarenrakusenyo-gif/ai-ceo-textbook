export type Chapter = {
  slug: string;
  title: string;
  subtitle: string;
  file: string;
  emoji: string;
};

export const chapters: Chapter[] = [
  {
    slug: "part1",
    title: "第1部",
    subtitle: "主要企業とCEO一覧",
    file: "第1部-主要企業とCEO一覧.md",
    emoji: "🏢",
  },
  {
    slug: "part2",
    title: "第2部",
    subtitle: "CEO詳細プロフィール",
    file: "第2部-CEO詳細プロフィール.md",
    emoji: "👤",
  },
  {
    slug: "part3",
    title: "第3部",
    subtitle: "AI戦国時代の相関図",
    file: "第3部-AI戦国時代の相関図.md",
    emoji: "⚔️",
  },
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getAdjacentChapters(slug: string) {
  const index = chapters.findIndex((c) => c.slug === slug);
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}
