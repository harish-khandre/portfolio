import type { Metadata } from "next";
import { Palanquin } from "next/font/google";
import "./globals.css";

const palanquin = Palanquin({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harish's portfolio",
  description: "Harish's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={palanquin.className}>{children}</body>
    </html>
  );
}
