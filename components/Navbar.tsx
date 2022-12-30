import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <>
      <nav className="w-full flex flex-1 flex-row items-center justify-between py-4 px-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 10,
            ease: "anticipate",
          }}
        >
          <Image src="/fvlogo.svg" alt="Logo" width={36} height={24} />
        </motion.div>
        <button className="flex lg:hidden text-white" onClick={handleToggle}>
          {isToggle ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars4Icon className="h-6 w-6" />
          )}
        </button>
        <motion.div
          className="hidden lg:flex text-sm text-neutral-700 font-inter"
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="space-x-6">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/technologies"
              className="hover:text-white transition-colors duration-300"
            >
              Technologies
            </Link>
            <Link
              href="/work"
              className="hover:text-white transition-colors duration-300"
            >
              Work
            </Link>
            <Link
              href="/experience"
              className="hover:text-white transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
