import Link from "next/link";

export interface Platform {
  title: string;
  href: string;
}

const Platforms: Platform[] = [
  {
    title: "GitHub",
    href: "https://github.com/flemingvincent",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/flemingvincent",
  },
  {
    title: "X",
    href: "https://x.com/flmngv",
  },
];

const ContactItem = ({ title, href }: Platform) => {
  return (
    <div className="flex flex-row">
      <p className="min-w-36 text-zinc-600 dark:text-zinc-300">{title}</p>
      <Link
        className="hover:underline hover:underline-offset-2"
        href={href}
        target="_blank"
      >
        {href.split("/").pop()}
      </Link>
    </div>
  );
};

export const Contact = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3>Contact</h3>
      {Platforms.map((item) => (
        <ContactItem key={item.title} title={item.title} href={item.href} />
      ))}
    </section>
  );
};
