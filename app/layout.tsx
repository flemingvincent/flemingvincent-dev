import "@/styles/globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";

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
					"min-h-screen antialiased max-w-xl px-4 py-8 mx-auto bg-neutral-50 dark:bg-neutral-950 text-black dark:text-white",
					GeistSans.className,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
