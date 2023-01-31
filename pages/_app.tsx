import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
	subsets: [
		"latin",
		"latin-ext",
		"cyrillic",
		"cyrillic-ext",
		"greek",
		"greek-ext",
		"vietnamese",
	],
	weight: ["400", "500", "600", "700", "800"],
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={inter.className}>
			<Component {...pageProps} />
			<Analytics />
		</main>
	);
}

export default MyApp;
