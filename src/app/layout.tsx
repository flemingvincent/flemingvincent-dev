import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Vincent Fleming",
  description: "Software Developer II at RF-SMART",
  applicationName: "flemingvincent.dev",
  keywords: [
    "Vincent Fleming",
    "Software Engineer",
    "Software Developer",
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
    description: "Software Developer II at RF-SMART",
    url: "https://flemingvincent.dev",
    siteName: "flemingvincent.dev",
    images: [
      {
        url: "https://flemingvincent.dev/og-image.png",
        width: 2560,
        height: 1440,
      },
    ],
  },
  icons: {
    icon: "/avatar.png",
    apple: "/avatar.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Fleming",
    description: "Software Developer II at RF-SMART",
    creator: "@flmngv",
    images: ["https://flemingvincent.dev/og-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fdfdfc",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Play the intro once per session: flag <html> before first paint so nothing flashes.
const introScript = `try{if(!sessionStorage.getItem("intro")){sessionStorage.setItem("intro","1");document.documentElement.dataset.intro=""}}catch(e){}`;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // suppressHydrationWarning: the intro script below sets data-intro on <html> before hydration.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body
        className={cn(
          "min-h-screen flex justify-center antialiased bg-background text-black text-base selection:bg-selection",
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
