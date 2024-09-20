import Link from "next/link";

export function About() {
	return (
		<header className="pt-6 space-y-4">
			<p className="text-lg">vincent fleming</p>
			<p>
				technology analyst @{" "}
				<Link
					className="underline underline-offset-4 text-[#0000FF] font-medium"
					href="https://www.dnb.com/"
					target="_blank"
				>
					dun & bradstreet
				</Link>
			</p>
		</header>
	);
}
