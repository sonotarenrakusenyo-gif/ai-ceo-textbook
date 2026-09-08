export function PowerOverview() {
  return (
    <div className="my-6 space-y-3">
      <div className="rounded-xl border-2 border-yellow-500/50 bg-yellow-500/10 p-4 text-center">
        <div className="text-lg">🟨</div>
        <div className="font-bold text-yellow-300">NVIDIA（フアン）</div>
        <div className="mt-1 text-xs text-yellow-200/70">
          絶対王者・武器商人 — 全員がここに依存
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center text-xs text-slate-500">
          <div className="h-4 w-px bg-slate-600" />
          <span>GPU供給</span>
          <div className="h-4 w-px bg-slate-600" />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-center">
          <div className="text-sm font-bold text-red-300">🟥 Microsoft × OpenAI</div>
          <div className="mt-1 text-xs text-red-200/60">元祖・絶対王者</div>
        </div>
        <div className="rounded-xl border border-green-500/40 bg-green-500/10 p-3 text-center">
          <div className="text-sm font-bold text-green-300">🟩 反OpenAI派</div>
          <div className="mt-1 text-xs text-green-200/60">Anthropic / Meta</div>
        </div>
        <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-3 text-center">
          <div className="text-sm font-bold text-blue-300">🟦 マスク陣営</div>
          <div className="mt-1 text-xs text-blue-200/60">マスク × Cursor</div>
        </div>
      </div>
    </div>
  );
}
