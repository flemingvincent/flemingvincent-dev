import { LinkList, LinkListItem } from "@/components/link-list";

const data = [
  {
    title: "Software Developer II",
    href: "https://www.rfsmart.com/",
    company: "RF‑SMART",
  },
  {
    title: "Associate Software Engineer",
    href: "https://www.dnb.com/en-us/products/dnb-hoovers.html",
    company: "Dun & Bradstreet",
  },
  {
    title: "Junior Software Engineer",
    href: "https://apps.apple.com/us/app/flyjets/id1631026300",
    company: "FLYJETS",
  },
];

export const Works = () => {
  return (
    <section className="enter flex flex-col gap-1 [--enter-index:2]">
      <h2 className="font-medium">Work</h2>
      <LinkList>
        {data.map((work) => (
          <LinkListItem key={work.href} href={work.href} description={work.company}>
            {work.title}
          </LinkListItem>
        ))}
      </LinkList>
    </section>
  );
};
