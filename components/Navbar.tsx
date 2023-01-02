import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Github, Linkedin, Menu, X } from "@geist-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 h-16 w-[100vw] bg-[#00000070] backdrop-saturate-150 backdrop-blur-sm shadow-[0_1px_0_0_#ffffff1a] z-[999] flex flex-1 items-center justify-center"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-1 items-center justify-between max-w-[1200px]">
        <div className="pl-6">
          <Link href="/">
            <Image
              src="/fvlogo.svg"
              alt="flemingvincent.dev"
              width={36}
              height={24}
            />
          </Link>
        </div>
        <div className="hidden mobile:flex mobile:flex-1 mobile:justify-evenly">
          <Link href="/tech">
            <span className="text-[#888] text-sm hover:text-white font-inter transition-colors">
              Technologies
            </span>
          </Link>
          <Link href="/work">
            <span className="text-[#888] text-sm hover:text-white font-inter transition-colors">
              Work
            </span>
          </Link>
          <Link href="/exp">
            <span className="text-[#888] text-sm hover:text-white font-inter transition-colors">
              Experience
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-[#888] text-sm hover:text-white font-inter transition-colors">
              Contact
            </span>
          </Link>
        </div>
        <div className="pr-6 flex flex-row gap-4">
          <a
            className="hidden mobile:flex"
            href="https://github.com/FlemingVincent"
          >
            <Github color="#ffffff" size={24} />
          </a>
          <a
            className="hidden mobile:flex"
            href="https://www.linkedin.com/in/vincentfleming/"
          >
            <Linkedin color="#ffffff" size={24} />
          </a>
          <div className="flex mobile:hidden" onClick={() => handleMenu()}>
            {isOpen ? (
              <X color="#fff" size={24} />
            ) : (
              <Menu color="#fff" size={24} />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-screen h-screen top-[65px] bg-black">
          <div className="flex flex-col ">
            <Link
              className="flex items-center w-screen h-[50px] hover:bg-[#111111] transition-colors px-6 border-b border-b-[#333]"
              href="/tech"
            >
              <span className="text-white text-base font-inter">
                Technologies
              </span>
            </Link>
            <Link
              className="flex items-center w-screen h-[50px] hover:bg-[#111111] transition-colors px-6 border-b border-b-[#333]"
              href="/work"
            >
              <span className="text-white text-base font-inter">Work</span>
            </Link>
            <Link
              className="flex items-center w-screen h-[50px] hover:bg-[#111111] transition-colors px-6 border-b border-b-[#333]"
              href="/exp"
            >
              <span className="text-white text-base font-inter">
                Experience
              </span>
            </Link>
            <Link
              className="flex items-center w-screen h-[50px] hover:bg-[#111111] transition-colors px-6 border-b border-b-[#333]"
              href="/contact"
            >
              <span className="text-white text-base font-inter">Contact</span>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center h-[50px] px-6 gap-6">
            <a href="https://github.com/FlemingVincent">
              <Github color="#ffffff" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vincentfleming/">
              <Linkedin color="#ffffff" size={24} />
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
