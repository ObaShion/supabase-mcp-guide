import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodexでSupabase MCPを使おう！",
  description: "中高生向け：CodexとSupabase MCPを安全につなぐステップバイステップガイド",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
