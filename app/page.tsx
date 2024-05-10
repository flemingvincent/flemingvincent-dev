import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { More } from "@/components/more";
import { Projects } from "@/components/projects";

export default function Home() {
	return (
		<div className="space-y-12">
			<Hero />
			<Work />
			<Projects />
			<More />
		</div>
	);
}
