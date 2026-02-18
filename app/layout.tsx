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
  title: "Cortex — AI Assistant for Unreal Engine 5",
  description:
    "Cortex is a native Unreal Engine 5 editor plugin that brings AI-powered assistance directly into your workflow. Create Blueprints, build UI, generate PCG biomes, and more — all without leaving the editor.",
  keywords: ["Unreal Engine", "AI", "Blueprint", "Plugin", "Claude", "GPT", "PCG", "UE5"],
  openGraph: {
    title: "Cortex — AI Assistant for Unreal Engine 5",
    description: "Chat with Claude or GPT to create Blueprints, build UI, generate PCG biomes — all inside UE5.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
