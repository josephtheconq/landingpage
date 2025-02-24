import type { Metadata } from "next";
import { League_Spartan, Indie_Flower } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({ 
  subsets: ["latin"],
  variable: '--font-league-spartan'
});

const indieFlower = Indie_Flower({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-indie-flower'
});

export const metadata: Metadata = {
  title: "Magic Kids AI - Yapay Zeka ile Keşfet, Eğlen, Öğren",
  description: "Merak eden zihinler için akıllı eğlence platformu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${leagueSpartan.variable} ${indieFlower.variable}`}>{children}</body>
    </html>
  );
}
