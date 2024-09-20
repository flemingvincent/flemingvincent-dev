import Link from "next/link";

export function Header() {
	return (
		<header className="flex flex-row gap-x-2 px-8">
			<Link
				className="underline underline-offset-4 text-[#0000FF] font-medium"
				href="https://github.com/FlemingVincent"
				target="_blank"
			>
				github
			</Link>
			<p>/</p>
			<Link
				className="underline underline-offset-4 text-[#0000FF] font-medium"
				href="https://www.linkedin.com/in/vincentfleming/"
				target="_blank"
			>
				linkedin
			</Link>
			<p>/</p>
			<Link
				className="underline underline-offset-4 text-[#0000FF] font-medium"
				href="https://twitter.com/veesentayy"
				target="_blank"
			>
				twitter
			</Link>
		</header>
	);
}
