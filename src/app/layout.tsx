import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className="text-black dark:text-white bg-[#EEEEEE] dark:bg-[#111111]"
			lang="en"
			suppressHydrationWarning
		>
			<body className="antialiased">
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
