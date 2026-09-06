import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import { ChapterNav } from "@/components/ChapterNav";
import {
  chapters,
  getChapter,
  getAdjacentChapters,
} from "@/lib/chapters";
import { getMarkdownContent, stripNavLinks } from "@/lib/markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) return {};
  return {
    title: `${chapter.title} ${chapter.subtitle} | CEO教科書`,
  };
}

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const raw = getMarkdownContent(chapter.file);
  const content = stripNavLinks(raw);
  const { prev, next } = getAdjacentChapters(slug);

  return (
    <article>
      <header className="mb-6 border-b border-slate-700 pb-4">
        <div className="text-3xl">{chapter.emoji}</div>
        <p className="mt-1 text-sm font-medium text-indigo-400">
          {chapter.title}
        </p>
        <h1 className="text-xl font-extrabold text-white md:text-2xl">
          {chapter.subtitle}
        </h1>
      </header>

      <MarkdownContent content={content} />
      <ChapterNav prev={prev} next={next} />
    </article>
  );
}
