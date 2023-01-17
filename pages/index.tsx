import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Navbar } from "components/Navbar";
import { Hero } from "components/Hero";

const Home: NextPage = () => {
	return (
		<div className="bg-black">
			<Head>
				<title>VINCENT© | 2023</title>
				<link rel="icon" href="/avatar.png" />
				<meta
					name="theme-color"
					content="#eeeeee"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="theme-color"
					content="#111111"
					media="(prefers-color-scheme: dark)"
				/>
			</Head>

			<main>
				<div id="hero-section" className="bg-[#eeeeee] dark:bg-[#111111]">
					<Navbar />
					<Hero />
				</div>
			</main>
		</div>
	);
};

export default Home;
