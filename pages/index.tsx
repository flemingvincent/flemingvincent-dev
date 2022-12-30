import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-[#010101]">
      <Head>
        <title>flemingvincent.dev</title>
        <link rel="icon" href="/fvlogo.svg" />
      </Head>

      <main className="w-[100vw] h-[100vh] text-white bg-[url(/grid.svg)]">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-56px)] gap-y-12 px-6">
          <motion.h1
            className="font-inter font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight inline-flex items-center animate-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Vincent Fleming
          </motion.h1>
          <motion.h2
            className="w-[80vw] md:w-[60vw] lg:w-[40vw] text-2xl tracking-normal text-[#888888]"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            I design {"<body>"} with {"<style>"} from {"<head>"}. Pushing pixels
            and code to their limits since '01.
          </motion.h2>
        </div>
      </main>
    </div>
  );
};

export default Home;
