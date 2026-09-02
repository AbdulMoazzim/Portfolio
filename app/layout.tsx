import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul — Computer Systems Engineer & Full-Stack Developer",
  description:
    "Portfolio of Abdul, a Computer Systems Engineering student and MERN stack developer building production-grade platforms across fintech, sustainability, and education, on his way to an MSc in ML/AI.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Abdul — Computer Systems Engineer & Full-Stack Developer",
    description:
      "Building disciplined, well-documented software across fintech, sustainability, and education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
