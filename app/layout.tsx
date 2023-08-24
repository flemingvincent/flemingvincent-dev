import type { Metadata } from "next";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";

// These styles apply to every route in the application
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

const SFProDisplay = localFont({
	src: [
		{
			path: "./SF-Pro-Display-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./SF-Pro-Display-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
	],
	variable: "--font-display",
});

const SFProText = localFont({
	src: [
		{
			path: "./SF-Pro-Text-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./SF-Pro-Text-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
	],
	variable: "--font-text",
});

export const metadata: Metadata = {
	title: "Vincent Fleming",
	description:
		"Actively working at the intersection of design and development.",
	applicationName: "Vincent Fleming",
	authors: {
		name: "Vincent Fleming",
		url: "https://github.com/FlemingVincent",
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
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#000000" },
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
	],
	creator: "Vincent Fleming",
	publisher: "Vincent Fleming",
	icons: {
		icon: "/avatar-small.png",
		shortcut: "/avatar-small.png",
		apple: "/avatar-small.png",
	},
	openGraph: {
		type: "website",
		url: "https://flemingvincent.dev",
		title: "Vincent Fleming",
		description:
			"Actively working at the intersection of design and development.",
		siteName: "Vincent Fleming",
		images: [
			{
				url: "https://flemingvincent.dev/og.png",
				width: 1200,
				height: 600,
				alt: "flemingvincent.dev",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@veesentayy",
		creator: "@veesentayy",
		title: "Vincent Fleming",
		description:
			"Actively working at the intersection of design and development.",
		images: [
			{
				url: "https://flemingvincent.dev/og.png",
				width: 1200,
				height: 600,
				alt: "flemingvincent.dev",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${SFProDisplay.variable} ${SFProText.variable} bg-white dark:bg-black text-black dark:text-white`}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
					<Footer />
				</ThemeProvider>
			</body>
			<Analytics />
		</html>
	);
}
