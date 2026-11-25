import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Smooth from "@/components/Smooth";

const display = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Puneet Mishra — Software Developer & UI/UX Designer",
  description: "Portfolio of Puneet Mishra: software developer and UI/UX designer skilled in React, Next.js, SQL and Power BI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body><Smooth>{children}</Smooth></body>
    </html>
  );
}