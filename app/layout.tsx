import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milan Ramadhan — Building Technology That Starts With People",
  description:
    "Portfolio of Muhammad Milan Ramadhan Mulizar — Informatics student, AI enthusiast, community leader, and lifelong learner. Applying for Apple Developer Academy Indonesia.",
  keywords: [
    "Milan Ramadhan",
    "Apple Developer Academy",
    "Portfolio",
    "Informatics",
    "Universitas Syiah Kuala",
    "AI",
    "Full-Stack Developer",
    "Community Leader",
  ],
  authors: [{ name: "Muhammad Milan Ramadhan Mulizar" }],
  openGraph: {
    title: "Milan Ramadhan — Building Technology That Starts With People",
    description:
      "Informatics student, AI enthusiast, community leader, and lifelong learner exploring how technology can create meaningful impact.",
    type: "website",
    locale: "en_US",
    url: "https://milanramadhan.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan Ramadhan — Building Technology That Starts With People",
    description:
      "Informatics student, AI enthusiast, community leader, and lifelong learner exploring how technology can create meaningful impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
