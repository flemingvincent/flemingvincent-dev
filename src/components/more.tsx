import Link from "next/link";

export const More = () => {
  return (
    <section className="flex flex-col gap-4">
      <span className="font-medium">More</span>
      <p className="text-[#63635E]">
        You can see more of my work on{" "}
        <Link
          className="underline underline-offset-2"
          href="https://github.com/flemingvincent"
          target="_blank"
        >
          GitHub
        </Link>
        ,{" "}
        <Link
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/flemingvincent"
          target="_blank"
        >
          LinkedIn
        </Link>
        , or{" "}
        <Link
          className="underline underline-offset-2"
          href="https://x.com/flmngv"
          target="_blank"
        >
          Twitter
        </Link>
        .
      </p>
    </section>
  );
};
