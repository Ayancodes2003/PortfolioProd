import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varun • AI & Backend Engineer",
  description: "Portfolio of Varun, AI Engineer, Backend Developer, and GenAI Builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans selection:bg-white/20 selection:text-white bg-transparent">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
