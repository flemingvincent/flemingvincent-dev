import Link from "next/link";

import { projects } from "@/data/projects";

export interface projectItemProps {
	title: string;
	description: string;
	href: string;
	type: string;
}

function ProjectItem({ title, description, href, type }: projectItemProps) {
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

export function Projects() {
	return (
		<div className="space-y-4">
			<p className="text-lg">projects</p>
			{projects.map((project) => (
				<ProjectItem key={project.title} {...project} />
			))}
		</div>
	);
}
