import React from "react";
import Link from "next/link";

import Logo from "../assets/fvlogo.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import { Bars4Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-1 flex-row items-center justify-between pt-4">
      <Logo />
      <button className="flex lg:hidden">
        <Bars4Icon className="h-6 w-6" />
      </button>
      <div className="hidden lg:flex text-sm font-mono text-white">
        <div className="border-r border-r-white space-x-8">
          <Link href="/">// Home</Link>
          <Link href="/technologies">// Technologies</Link>
          <Link href="/work">// Work</Link>
          <Link href="/experience">// Experience</Link>
          <Link href="/contact" className="pr-8">
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
  );
};

export default Navbar;
