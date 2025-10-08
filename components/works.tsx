import Link from "next/link";

export interface Project {
  title: string;
  company: string;
  href: string;
}

const data: Project[] = [
  {
    title: "Software Engineer",
    href: "https://www.dnb.com/en-us/products/dnb-hoovers.html",
    company: "Dun & Bradstreet",
  },
  {
    title: "Software Engineer",
    href: "https://apps.apple.com/us/app/flyjets/id1631026300",
    company: "Flyjets",
  },
];

const Work = ({ title, company, href }: Project) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-3 rounded-md hover:bg-[#F5F4F4] -mx-3"
    >
      <span>{title}</span>
      <p className="text-[#63635E]">{company}</p>
    </Link>
  );
};

export const Works = () => {
  return (
    <section className="flex flex-col gap-4">
      <span className="font-medium">Work</span>
      {data.map((project, index) => (
        <Work key={index} {...project} />
      ))}
    </section>
  );
};
