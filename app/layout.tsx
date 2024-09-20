import "@/styles/globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";

import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
// import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata: Metadata = {
	applicationName: "Vincent Fleming",
	authors: {
		name: "Vincent Fleming",
		url: "https://github.com/FlemingVincent",
	},
	creator: "Vincent Fleming",
	description: "Software Engineer based in Jacksonville, Florida.",
	icons: {
		icon: "/avatar.png",
		shortcut: "/avatar.png",
		apple: "/avatar.png",
	},
	keywords: [
		"vincent",
		"fleming",
		"mobile",
		"design",
		"development",
		"react",
		"react native",
		"expo",
	],
	metadataBase: new URL("https://flemingvincent.dev/"),
	openGraph: {
		title: "Vincent Fleming",
		description: "Software Engineer based in Jacksonville, Florida.",
		url: "https://flemingvincent.dev/",
		locale: "en_US",
		type: "website",
	},
	publisher: "Vincent Fleming",
	title: "Vincent Fleming",
	twitter: {
		title: "Vincent Fleming",
		card: "summary_large_image",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-screen antialiased text-[0.9rem] max-w-xl py-8 bg-neutral-50 text-black",
					GeistMono.className,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					<Header />
					{children}
					{/* <TailwindIndicator /> */}
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
}
