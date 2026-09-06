"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "@/lib/chapters";

export function BottomNav() {
  const pathname = usePathname();

  const items = [
    { href: "/", label: "ホーム", emoji: "🏠" },
    ...chapters.map((c) => ({
      href: `/chapter/${c.slug}`,
      label: c.title,
      emoji: c.emoji,
    })),
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-700/80 bg-slate-900/95 backdrop-blur-lg pb-[env(safe-area-inset-bottom)]">
      <div className="flex overflow-x-auto scrollbar-hide">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-[4.5rem] flex-1 flex-col items-center gap-0.5 px-2 py-2.5 text-[10px] transition-colors ${
                active
                  ? "text-indigo-400"
                  : "text-slate-400 active:text-slate-200"
              }`}
            >
              <span className="text-lg leading-none">{item.emoji}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
