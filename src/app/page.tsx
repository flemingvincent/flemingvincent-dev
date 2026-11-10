import { Header } from "@/components/header";
import { Today } from "@/components/today";
import { Works } from "@/components/works";
import { Projects } from "@/components/projects";
import { More } from "@/components/more";

export default function Home() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-20 px-6 py-16 sm:gap-28">
      <Header />
      <main className="flex flex-col gap-20 sm:gap-28">
        <Today />
        <Works />
        <Projects />
        <More />
      </main>
    </div>
  );
}
