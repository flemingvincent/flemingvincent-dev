import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Vincent Fleming",
  description: "Software Engineer at Dun & Bradstreet",
  applicationName: "flemingvincent.dev",
  keywords: [
    "Vincent Fleming",
    "Software Engineer",
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "TypeScript",
  ],
  authors: [{ name: "Vincent Fleming", url: "https://flemingvincent.dev" }],
  creator: "Vincent Fleming",
  publisher: "Vincent Fleming",
  openGraph: {
    title: "Vincent Fleming",
    description: "Software Engineer at Dun & Bradstreet",
    url: "https://flemingvincent.dev",
    siteName: "flemingvincent.dev",
    images: [
      {
        url: "https://flemingvincent.dev/og-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
  icons: {
    icon: "/avatar.png",
  },
  manifest: "",
  twitter: {
    card: "summary_large_image",
    title: "Vincent Fleming",
    description: "Software Engineer at Dun & Bradstreet",
    creator: "@fleming_vincent",
    images: ["https://flemingvincent.dev/og-image.png"],
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen flex flex-1 justify-center antialiased bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white selection:bg-[#0000ff] selection:text-white dark:selection:bg-[#00ff00] dark:selection:text-black text-sm",
          inter.className,
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
