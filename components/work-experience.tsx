import Link from "next/link";

export interface Work {
  duration: string;
  title: string;
  company: string;
  href: string;
  location?: string;
  product?: string;
}

const Works: Work[] = [
  {
    duration: "2024 — Present",
    title: "Software Engineer",
    company: "Dun & Bradstreet",
    href: "https://www.dnb.com/en-us/products/dnb-hoovers.html",
    location: "Jacksonville, FL",
  },
  {
    duration: "2022 — 2023",
    title: "Software Engineer",
    company: "Flyjets",
    href: "https://apps.apple.com/us/app/flyjets/id1631026300",
  },
];

const WorkItem = ({
  duration,
  title,
  company,
  href,
  location,
  product,
}: Work) => {
  return (
    <div className="flex flex-row">
      <p className="min-w-36 text-zinc-400 dark:text-zinc-500">{duration}</p>
      <div className="flex flex-col gap-1">
        <Link
          className="hover:underline hover:underline-offset-2"
          href={href}
          target="_blank"
        >
          {title} at {company}
        </Link>
        {location && (
          <p className="text-zinc-400 dark:text-zinc-500">{location}</p>
        )}
        {product && (
          <p className="text-zinc-400 dark:text-zinc-500">{product}</p>
        )}
      </div>
    </div>
  );
};

export const WorkExperience = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3>Work Experience</h3>
      {Works.map((item, index) => (
        <WorkItem
          key={index}
          duration={item.duration}
          title={item.title}
          company={item.company}
          href={item.href}
          location={item.location}
          product={item.product}
        />
      ))}
    </section>
  );
};
