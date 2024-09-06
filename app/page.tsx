import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";

export default function Home() {
	return (
		<div className="px-8 space-y-6">
			<About />
			<Hero />
			<Work />
			<Projects />
		</div>
	);
}
