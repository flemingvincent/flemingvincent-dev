import Image from "next/image";
import Link from "next/link";

export interface Project {
  duration: string;
  title: string;
  href?: string;
  description: string;
  images?: string[];
}

const Projects: Project[] = [
  {
    duration: "Ongoing",
    title: "Expo Supabase Starter",
    href: "https://github.com/flemingvincent/expo-supabase-starter",
    description: "Get started with React Native, Expo, and Supabase",
  },
  {
    duration: "2023",
    title: "Circles",
    href: "https://github.com/flemingvincent/circles",
    description: "Real-time location sharing meets social networking",
    images: ["/circles-1.png", "/circles-2.png", "/circles-3.png"],
  },
  {
    duration: "2022",
    title: "Fitness",
    href: "",
    description: "Track and share workouts with friends",
    images: ["/ftns-1.png", "/ftns-2.png", "/ftns-3.png"],
  },
];

const ProjectItem = ({
  duration,
  title,
  href,
  description,
  images,
}: Project) => {
  return (
    <div className="flex flex-row">
      <p className="min-w-36 text-zinc-600 dark:text-zinc-300">{duration}</p>
      <div className="flex flex-col gap-1">
        {href ? (
          <Link
            className="hover:underline hover:underline-offset-2"
            href={href}
            target="_blank"
          >
            {title}
          </Link>
        ) : (
          <p>{title}</p>
        )}
        <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
        {images && (
          <div className="flex flex-row w-full overflow-x-auto gap-1 no-scrollbar">
            {images.map((image, index) => (
              <Image
                key={index}
                className="rounded-md"
                src={image}
                alt=""
                width={170}
                height={96}
                quality={100}
                priority
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const SideProjects = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3>Side Projects</h3>
      {Projects.map((item, index) => (
        <ProjectItem
          key={index}
          duration={item.duration}
          title={item.title}
          href={item.href}
          description={item.description}
          images={item.images}
        />
      ))}
    </section>
  );
};
