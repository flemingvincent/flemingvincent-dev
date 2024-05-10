import Link from "next/link";

import { work } from "@/data/work";

export interface workItemProps {
	title: string;
	description: string;
	href: string;
}

function WorkItem({ title, description, href }: workItemProps) {
	return (
		<div className="hover:bg-neutral-100 dark:hover:bg-neutral-900 p-3 rounded-md -ml-3">
			<Link href={href} target="_blank">
				<p className="text-neutral-700 dark:text-neutral-300">{title}</p>
				<p className="text-neutral-500">{description}</p>
			</Link>
		</div>
	);
}

export function Work() {
	return (
		<div className="space-y-4">
			<p className="font-semibold">Work</p>
			{work.map((work) => (
				<WorkItem key={work.title} {...work} />
			))}
		</div>
	);
}
