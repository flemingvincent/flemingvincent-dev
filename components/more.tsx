import Link from "next/link";

export function More() {
	return (
		<footer className="space-y-4">
			<Link href="/">
				<p className="font-semibold">More</p>
			</Link>
			<p className="text-neutral-500">
				You can see more of my work on{" "}
				<Link
					className="underline underline-offset-2"
					href="https://github.com/FlemingVincent"
					target="_blank"
				>
					GitHub
				</Link>
				, and connect with me on{" "}
				<Link
					className="underline underline-offset-2"
					href="https://www.linkedin.com/in/vincentfleming/"
					target="_blank"
				>
					LinkedIn
				</Link>{" "}
				and{" "}
				<Link
					className="underline underline-offset-2"
					href="https://twitter.com/veesentayy"
					target="_blank"
				>
					Twitter
				</Link>
				.
			</p>
		</footer>
	);
}
