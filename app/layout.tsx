// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_JP } from 'next/font/google'
import "./globals.css";

const notosansjp = Noto_Sans_JP({
  weight:"400",
  subsets: ["latin"],
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notosansjp.className}>
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <header className="h-16 bg-gray-200 text-black text-2xl font-semibold flex items-center justify-left pl-4">AWA</header>
        <main>{children}</main>
        <footer className="h-16 bg-gray-200 text-black text-2xl font-semibold flex items-center justify-end pr-4">©ipe inc.</footer>
      </body>
    </html>
  )
}