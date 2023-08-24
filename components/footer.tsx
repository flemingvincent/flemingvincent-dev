import Link from "next/link";
import * as React from "react";

const Footer = () => {
	return (
		<footer className="max-w-[67rem] mx-auto p-6">
			<div className="flex flex-row justify-center gap-x-6 mb-4">
				<Link
					className="text-black/40 dark:text-white/40 transition-all duration-300 ease-out hover:text-black dark:hover:text-white"
					href="/fleming-vincent-resume.pdf"
					target="_blank"
				>
					<p className="text-center text-sm font-text">Resume</p>
				</Link>
				<Link
					className="text-black/40 dark:text-white/40 transition-all duration-300 ease-out hover:text-black dark:hover:text-white"
					href="https://github.com/FlemingVincent"
					target="_blank"
				>
					<p className="text-center text-sm font-text">Github</p>
				</Link>
				<Link
					className="text-black/40 dark:text-white/40 transition-all duration-300 ease-out hover:text-black dark:hover:text-white"
					href="https://www.linkedin.com/in/vincentfleming"
					target="_blank"
				>
					<p className="text-center text-sm font-text">LinkedIn</p>
				</Link>
				<Link
					className="text-black/40 dark:text-white/40 transition-all duration-300 ease-out hover:text-black dark:hover:text-white"
					href="https://x.com/veesentayy"
					target="_blank"
				>
					<p className="text-center text-sm font-text">Twitter</p>
				</Link>
			</div>
			<p className="text-center text-sm text-black/40 dark:text-white/40 font-text">
				© 2023{" "}
				<Link
					className="transition-all duration-300 ease-out hover:text-black dark:hover:text-white"
					href="mailto:contact@flemingvincent.dev"
					target="_blank"
				>
					Vincent Fleming
				</Link>
			</p>
		</footer>
	);
};

export { Footer };
