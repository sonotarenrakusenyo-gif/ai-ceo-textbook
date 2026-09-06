type Relation = {
  from: string;
  to: string;
  label: string;
  dashed?: boolean;
};

const factions = [
  {
    color: "red",
    emoji: "🟥",
    title: "Microsoft × OpenAI",
    members: ["ナデラ（Microsoft）", "アルトマン（OpenAI）"],
    border: "border-red-500/40",
    bg: "bg-red-500/10",
    text: "text-red-300",
  },
  {
    color: "green",
    emoji: "🟩",
    title: "反OpenAI派",
    members: ["アモデイ（Anthropic）", "ザッカーバーグ（Meta）", "ピチャイ（Google）"],
    border: "border-green-500/40",
    bg: "bg-green-500/10",
    text: "text-green-300",
  },
  {
    color: "blue",
    emoji: "🟦",
    title: "マスク陣営",
    members: ["イーロン・マスク", "トルエル（Cursor）"],
    border: "border-blue-500/40",
    bg: "bg-blue-500/10",
    text: "text-blue-300",
  },
];

const relations: Relation[] = [
  { from: "Microsoft × OpenAI", to: "OpenAI", label: "130億ドル+出資・同盟かつ競合" },
  { from: "Google", to: "Anthropic", label: "巨額出資" },
  { from: "Anthropic", to: "OpenAI", label: "OpenAIから独立", dashed: true },
  { from: "Meta", to: "OpenAI", label: "Llama無償公開でビジネス破壊" },
  { from: "マスク", to: "Cursor", label: "600億ドル買収" },
  { from: "マスク", to: "OpenAI", label: "共同創業→決裂→裁判", dashed: true },
];

export function FactionRelations() {
  return (
    <div className="my-6 space-y-4">
      <div className="rounded-xl border-2 border-yellow-500/50 bg-yellow-500/10 p-4 text-center">
        <div className="font-bold text-yellow-300">🟨 NVIDIA — ジェンスン・フアン</div>
        <div className="mt-1 text-xs text-yellow-200/70">全陣営に GPU を供給</div>
        <div className="mt-3 flex justify-center gap-2">
          {["🟥", "🟩", "🟦"].map((e) => (
            <span key={e} className="text-xs text-slate-400">
              ↓ {e}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {factions.map((f) => (
          <div
            key={f.title}
            className={`rounded-xl border ${f.border} ${f.bg} p-4`}
          >
            <div className={`font-bold ${f.text}`}>
              {f.emoji} {f.title}
            </div>
            <ul className="mt-2 space-y-1">
              {f.members.map((m) => (
                <li key={m} className="text-sm text-slate-300">
                  • {m}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
        <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          主な関係性
        </div>
        <ul className="space-y-2">
          {relations.map((r) => (
            <li
              key={`${r.from}-${r.label}`}
              className="text-sm text-slate-300"
            >
              <span className={r.dashed ? "text-slate-400" : "text-indigo-300"}>
                {r.dashed ? "· · ·" : "→"}
              </span>{" "}
              <span className="text-slate-200">{r.from}</span>
              <span className="text-slate-500"> → </span>
              <span className="text-slate-400">{r.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
