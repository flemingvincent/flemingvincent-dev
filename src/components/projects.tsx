import { LinkList, LinkListItem } from "@/components/link-list";

const data = [
  {
    title: "Expo Clerk Convex",
    href: "https://github.com/flemingvincent/expo-clerk-convex",
    description: "A simple starter project for Expo, Clerk, and Convex applications.",
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

export const Projects = () => {
  return (
    <section className="enter flex flex-col gap-1 [--enter-index:3]">
      <h2 className="font-medium">Projects</h2>
      <LinkList>
        {data.map((project) => (
          <LinkListItem key={project.href} href={project.href} description={project.description}>
            {project.title}
          </LinkListItem>
        ))}
      </LinkList>
    </section>
  );
};
