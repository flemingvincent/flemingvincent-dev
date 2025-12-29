import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  href: string;
}

const data: Project[] = [
  {
    title: "Expo Supabase Starter",
    href: "https://github.com/flemingvincent/expo-supabase-starter",
    description: "A simple starter project for Expo and Supabase applications.",
  },
  {
    title: "Crosswater Turf and Irrigation",
    href: "https://www.crosswaterturf.com/",
    description: "A marketing website for a local landscaping company.",
  },
  {
    title: "The Ranch Wholesale Plants and Nursery",
    href: "https://www.theranchnursery.com/",
    description: "A full Shopify storefront for a local nursery.",
  },
  {
    title: "Circles",
    href: "https://github.com/flemingvincent/circles",
    description: "A real-time location sharing and social networking app.",
  },
  {
    title: "Fitness",
    href: "https://www.figma.com/design/WUz6bQuyakNiUaoMwRvPjQ/FTNS.?node-id=87-18&t=s6Dbn5iiWlObiVcE-1",
    description: "An app to track and share workouts with friends.",
  },
];

const ProjectItem = ({ title, description, href }: Project) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-3 rounded-md hover:bg-[#F5F4F4] -mx-3"
    >
      <span>{title}</span>
      <p className="text-[#63635E]">{description}</p>
    </Link>
  );
};

export const Projects = () => {
  return (
    <section className="flex flex-col gap-4">
      <span className="font-medium">Projects</span>
      {data.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </section>
  );
};
