import Link from "next/link";
import { chapters } from "@/lib/chapters";

export default function HomePage() {
  return (
    <div>
      <header className="mb-8 text-center">
        <div className="mb-3 text-4xl">🧠</div>
        <h1 className="text-2xl font-extrabold leading-tight text-white md:text-3xl">
          AI・テック帝国
          <br />
          <span className="text-indigo-400">戦国時代のCEO教科書</span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          7人のCEOと4つの陣営が織りなす
          <br />
          現代AI業界の全体像
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-700/80 bg-slate-800/40 p-5">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-indigo-400">
          この教科書で学べること
        </h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2">
            <span>📋</span>
            <span>主要7社の正式名称と現CEO</span>
          </li>
          <li className="flex gap-2">
            <span>👤</span>
            <span>各CEOの経歴と人物像</span>
          </li>
          <li className="flex gap-2">
            <span>⚔️</span>
            <span>AI業界の4陣営と勢力図</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
          目次
        </h2>
        <div className="space-y-3">
          {chapters.map((chapter, i) => (
            <Link
              key={chapter.slug}
              href={`/chapter/${chapter.slug}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-700/80 bg-slate-800/50 p-4 transition active:scale-[0.98] active:bg-slate-700/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-2xl">
                {chapter.emoji}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-medium text-indigo-400">
                  {chapter.title}
                </div>
                <div className="font-semibold text-white">
                  {chapter.subtitle}
                </div>
              </div>
              <div className="text-slate-500">→</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-700/80 bg-slate-800/40 p-5">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-400">
          登場CEOクイックリファレンス
        </h2>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            ["ピチャイ", "Google"],
            ["アルトマン", "OpenAI"],
            ["アモデイ", "Anthropic"],
            ["トルエル", "Cursor"],
            ["ザッカーバーグ", "Meta"],
            ["ナデラ", "Microsoft"],
            ["フアン", "NVIDIA"],
          ].map(([name, company]) => (
            <div
              key={name}
              className="rounded-lg bg-slate-900/60 px-3 py-2"
            >
              <div className="font-semibold text-slate-200">{name}</div>
              <div className="text-slate-500">{company}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
