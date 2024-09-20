import Link from "next/link";

import { work } from "@/data/work";

export interface workItemProps {
	title: string;
	description: string;
	href: string;
	type: string;
}

function WorkItem({ title, description, href, type }: workItemProps) {
	return (
		<div className="lowercase space-y-1">
			<p>
				<Link
					className="underline underline-offset-4 text-[#0000FF] font-medium"
					href={href}
					target="_blank"
				>
					{title}
				</Link>{" "}
				- <span className="text-xs">{type}</span>
			</p>
			<p className="text-sm">{description}</p>
		</div>
	);
}

export function Work() {
	return (
		<div className="space-y-4">
			<p className="text-lg">work</p>
			{work.map((work) => (
				<WorkItem key={work.title} {...work} />
			))}
		</div>
	);
}
