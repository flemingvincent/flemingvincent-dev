import Link from "next/link";

export function Header() {
	return (
		<header className="mb-12">
			<Link href="/">
				<p className="font-semibold">Vincent Fleming</p>
			</Link>
			<p className="text-neutral-700 dark:text-neutral-300">
				Software Engineer
			</p>
		</header>
	);
}
