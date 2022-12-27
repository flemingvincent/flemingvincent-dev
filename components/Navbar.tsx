import React, { useState } from "react";
import Link from "next/link";

import Logo from "../assets/fvlogo.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <>
      {isToggle ? (
        <nav className="absolute w-[100vw] h-[100vh] bg-[#010101f1] backdrop-blur-md flex flex-col space-y-8 pt-4 text-sm font-mono px-6">
          <div>
            <Logo />
            <button
              className="absolute top-4 right-6 hover:text-[#39ff14]"
              onClick={handleToggle}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <Link href="/" className="hover:text-[#39ff14]">
            // Home
          </Link>
          <Link href="/technologies" className="hover:text-[#39ff14]">
            // Technologies
          </Link>
          <Link href="/work" className="hover:text-[#39ff14]">
            // Work
          </Link>
          <Link href="/experience" className="hover:text-[#39ff14]">
            // Experience
          </Link>
          <Link href="/contact" className="hover:text-[#39ff14]">
            // Contact
          </Link>
        </nav>
      ) : (
        <nav className="w-full flex flex-1 flex-row items-center justify-between pt-4 px-6">
          <Logo />
          <button className="flex lg:hidden" onClick={handleToggle}>
            <Bars4Icon className="h-6 w-6" />
          </button>
          <div className="hidden lg:flex text-sm font-mono text-white">
            <div className="border-r border-r-white space-x-8">
              <Link href="/" className="hover:text-[#39ff14]">
                // Home
              </Link>
              <Link href="/technologies" className="hover:text-[#39ff14]">
                // Technologies
              </Link>
              <Link href="/work" className="hover:text-[#39ff14]">
                // Work
              </Link>
              <Link href="/experience" className="hover:text-[#39ff14]">
                // Experience
              </Link>
              <Link href="/contact" className="pr-8 hover:text-[#39ff14]">
                // Contact
              </Link>
            </div>
            <div className="flex flex-row space-x-4">
              <a
                className="pl-4 cursor-pointer"
                href="https://github.com/FlemingVincent"
              >
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/vincentfleming">
                <Linkedin />
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
