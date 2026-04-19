import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vrhunska Stomatološka Nega u Beogradu | Moj Flow Dent",
  description:
    "Otkrijte saosećajnu stomatološku negu bez osude u srcu Beograda. Zakažite posetu kod dr. Hong u Moj Flow Dent danas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <body className={`${fraunces.variable} ${hanken.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
