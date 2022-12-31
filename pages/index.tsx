import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "components/Navbar";
import Hero from "components/Hero";

import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full bg-black text-white">
      <Head>
        <title>flemingvincent.dev</title>
        <link rel="icon" href="/fvlogo.svg" />
      </Head>

      <main className="min-h-full bg-black">
        <Navbar />
        <Hero />
      </main>
    </div>
  );
};

export default Home;
