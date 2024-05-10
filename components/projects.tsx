import Link from "next/link";

import { projects } from "@/data/projects";

export interface projectItemProps {
	title: string;
	description: string;
	href: string;
}

function ProjectItem({ title, description, href }: projectItemProps) {
	return (
		<div className="hover:bg-neutral-100 dark:hover:bg-neutral-900 p-3 rounded-md -ml-3">
			<Link href={href} target="_blank">
				<p className="text-neutral-700 dark:text-neutral-300">{title}</p>
				<p className="text-neutral-500">{description}</p>
			</Link>
		</div>
	);
}

export function Projects() {
	return (
		<div className="space-y-4">
			<p className="font-semibold">Projects</p>
			{projects.map((project) => (
				<ProjectItem key={project.title} {...project} />
			))}
		</div>
	);
}
