import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kelwin Richard — Software Engineer",
  description:
    "Full-stack Software Engineer specializing in scalable systems, AI integrations, and modern web applications. TypeScript, Node.js, React, Next.js, NestJS.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "AI",
    "Node.js",
  ],
  authors: [{ name: "Kelwin Richard Fialho Pinheiro" }],
  openGraph: {
    title: "Kelwin Richard — Software Engineer",
    description:
      "Full-stack Software Engineer specializing in scalable systems, AI integrations, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
