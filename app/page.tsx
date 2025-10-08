import { Header } from "@/components/header";
import { Today } from "@/components/today";
import { Works } from "@/components/works";
import { Projects } from "@/components/projects";
import { More } from "@/components/more";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-2xl gap-32 px-6 py-16">
      <Header />
      <Today />
      <Works />
      <Projects />
      <More />
    </div>
  );
}
