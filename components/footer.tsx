import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const Footer = () => {
	return (
		<footer className="max-w-[67rem] border-t border-t-neutral-400/10 mx-auto p-6">
			<div className="flex flex-row justify-center gap-x-6 mb-4">
				<Link
					className="text-neutral-500 transition-all duration-300 ease-out hover:text-neutral-800 dark:hover:text-neutral-200"
					href="https://www.linkedin.com/in/vincentfleming"
				>
					<Linkedin strokeWidth={1} />
				</Link>
				<Link
					className="text-neutral-500 transition-all duration-300 ease-out hover:text-neutral-800 dark:hover:text-neutral-200"
					href="https://github.com/FlemingVincent"
				>
					<Github strokeWidth={1} />
				</Link>
				<Link
					className="text-neutral-500 transition-all duration-300 ease-out hover:text-neutral-800 dark:hover:text-neutral-200"
					href="https://x.com/veesentayy"
				>
					<Twitter strokeWidth={1} />
				</Link>
			</div>
			<p className="text-center text-sm text-neutral-500">
				© 2023{" "}
				<span className="transition-all duration-300 ease-out hover:text-neutral-800 dark:hover:text-neutral-200">
					Vincent Fleming
				</span>
			</p>
		</footer>
	);
};

export { Footer };
