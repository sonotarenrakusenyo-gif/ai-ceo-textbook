type Props = {
  lines: string[];
};

export function FlowBlock({ lines }: Props) {
  return (
    <div className="my-4 rounded-xl border border-slate-700 bg-slate-800/50 p-4">
      {lines.map((line, i) => (
        <div
          key={i}
          className={`text-sm ${
            line.includes("↓") ? "text-indigo-400" : "text-slate-300"
          }`}
        >
          {line || "\u00A0"}
        </div>
      ))}
    </div>
  );
}
