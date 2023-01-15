import React from "react";
import Link from "next/link";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export const Navbar = () => {
	return (
		<motion.div
			className="flex flex-1 w-full items-center justify-center"
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<nav className="flex flex-1 max-w-[1600px] p-4 items-center justify-between">
				<div className="flex flex-row gap-2">
					<Link
						href="https://github.com/FlemingVincent"
						className="p-2 border border-[#cccccc] dark:border-[#333333] hover:bg-[#dddddd] dark:hover:bg-[#222222] transition-colors duration-300 ease-in-out"
					>
						<FaGithub className="w-6 h-6 text-black dark:text-white" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/vincentfleming"
						className="p-2 border border-[#cccccc] dark:border-[#333333] hover:bg-[#dddddd] dark:hover:bg-[#222222] transition-colors duration-300 ease-in-out"
					>
						<FaLinkedinIn className="w-6 h-6 text-black dark:text-white" />
					</Link>
				</div>
				<div className="flex flex-row">
					<Link
						href="mailto:flemingvincent@ufl.edu"
						className="p-2 border border-[#cccccc] dark:border-[#333333] hover:bg-[#dddddd] dark:hover:bg-[#222222] transition-colors duration-300 ease-in-out"
					>
						<h1 className="text-sm text-black dark:text-white font-semibold">
							Let's Connect
						</h1>
					</Link>
				</div>
			</nav>
		</motion.div>
	);
};
