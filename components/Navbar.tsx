import React from "react";
import Link from "next/link";

import Logo from "../assets/fvlogo.svg";
import { Bars4Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-1 flex-row items-center justify-between pt-4">
      <Logo />
      <button className="flex lg:hidden">
        <Bars4Icon className="h-6 w-6" />
      </button>
      <div className="hidden lg:flex text-sm font-mono text-white">
        <div className="border-r border-r-black space-x-8">
          <Link href="/">// Home</Link>
          <Link href="/technologies">// Technologies</Link>
          <Link href="/work">// Work</Link>
          <Link href="/experience">// Experience</Link>
          <Link href="/contact" className="pr-8">
            // Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
