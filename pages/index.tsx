import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>flemingvincent.dev</title>
        <link rel="icon" href="/fvlogo.svg" />
      </Head>

      <main className="w-full h-screen px-6 bg-[#010101] text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-40px)]">
          <h1 className="font-inter font-bold text-4xl md:text-6xl lg:text-8xl inline-flex items-center">
            Vincent Fleming{" "}
            <div
              id="cursor"
              className="w-4 h-10 md:w-6 md:h-[60px] lg:w-8 lg:h-20"
            ></div>
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
