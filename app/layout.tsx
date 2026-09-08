import type { Metadata, Viewport } from "next";
import { BottomNav } from "@/components/BottomNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI・テック帝国 CEO教科書",
  description:
    "現代AI業界を動かす8人のCEOと、戦国時代の勢力図を学ぶ教科書",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CEO教科書",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <main className="mx-auto min-h-dvh max-w-2xl px-4 pb-24 pt-6">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
