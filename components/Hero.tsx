import React from "react";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-1 items-center justify-center w-[100vw] h-[calc(100vh-64px)] pt-16">
      <div className="flex flex-1 flex-col gap-y-6 items-center justify-center max-w-[1200px] px-6">
        <motion.h1
          className="text-center min-[720px]:text-[72px] min-[960px]:text-[80px] min-[1200px]:text-[112px] font-inter tracking-tight"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          Student.{" "}
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Developer.
          </span>{" "}
          Innovator.
        </motion.h1>
        <motion.p
          className="text-center text-[#888] text-[20px] min-[1200px]:text-[24px] font-inter tracking-wide max-w-[768px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        >
          I design {"<body>"} with {"<style>"} from {"<head>"}. Pushing pixels
          to billions of users.
        </motion.p>
        <motion.button
          className="flex items-center justify-center w-full min-[600px]:w-[188px] h-[50px] rounded-[6px] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 p-[2px] drop-shadow-[0_4px_4px_0_#0000001a]"
          id="buttonTitle"
          title="Title"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center bg-black w-full h-full rounded-[3px] text-[16px] font-medium">
            Let's Connect
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
