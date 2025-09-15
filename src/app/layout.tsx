// src/app/layout.tsx
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import type { Metadata } from "next";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "エンジニア評価基準シート",
  description: "職種別・等級別スキル評価システム",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${noto.className} min-h-screen bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20`}>
        {children}
      </body>
    </html>
  );
}
