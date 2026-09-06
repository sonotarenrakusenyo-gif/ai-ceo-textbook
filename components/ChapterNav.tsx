import Link from "next/link";
import type { Chapter } from "@/lib/chapters";

type Props = {
  prev: Chapter | null;
  next: Chapter | null;
};

export function ChapterNav({ prev, next }: Props) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3">
      {prev ? (
        <Link
          href={`/chapter/${prev.slug}`}
          className="flex flex-col rounded-xl border border-slate-700 bg-slate-800/60 p-4 transition active:bg-slate-700/60"
        >
          <span className="text-xs text-slate-400">← 前へ</span>
          <span className="mt-1 text-sm font-semibold text-slate-100">
            {prev.emoji} {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/chapter/${next.slug}`}
          className="flex flex-col items-end rounded-xl border border-slate-700 bg-slate-800/60 p-4 text-right transition active:bg-slate-700/60"
        >
          <span className="text-xs text-slate-400">次へ →</span>
          <span className="mt-1 text-sm font-semibold text-slate-100">
            {next.title} {next.emoji}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
