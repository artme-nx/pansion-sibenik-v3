import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Tangerine } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pansion Šibenik — Stari grad, 50 m od katedrale sv. Jakova",
  description:
    "Pansion Šibenik — obiteljska kuća za goste u srcu starog grada, tek 50 metara od katedrale sv. Jakova (UNESCO). Sobe i apartman u kamenoj gradskoj kući, korak od rive, trajektne luke i plaže.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${cinzel.variable} ${cormorant.variable} ${tangerine.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
