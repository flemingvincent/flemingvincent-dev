import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

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
