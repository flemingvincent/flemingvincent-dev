import { ExternalArrow, ExternalLink } from "@/components/external-link";

const links = [
  { label: "GitHub", href: "https://github.com/flemingvincent" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/flemingvincent" },
  { label: "X", href: "https://x.com/flmngv" },
];

export const More = () => {
  return (
    <section className="enter flex flex-col gap-4 [--enter-index:4]">
      <h2 className="font-medium">More</h2>
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <ExternalLink
              href={link.href}
              className="group inline-flex h-11 items-center gap-1 rounded-full border border-hairline px-4 transition-[background-color,transform] duration-150 ease-out hover:bg-hover focus-visible:bg-hover active:scale-[0.96] sm:h-9"
            >
              {link.label}
              <ExternalArrow />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
