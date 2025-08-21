import { About } from "@/components/about";
import { WorkExperience } from "@/components/work-experience";
import { Education } from "@/components/education";
import { SideProjects } from "@/components/side-projects";
import { Teams } from "@/components/teams";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-xl p-6 gap-4">
      <About />
      <WorkExperience />
      <Education />
      <SideProjects />
      <Teams />
      <Contact />
    </div>
  );
}
