import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personalized Dental Care in Chicago, IL | 6 Corners Dental Studio",
  description:
    "Discover compassionate, judgment-free dental care in Portage Park, Chicago. Book your visit with Dr. Hong at 6 Corners Dental Studio today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${hanken.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
