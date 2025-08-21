import Link from "next/link";
import Image from "next/image";

export const Teams = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3>Teams</h3>
      <div className="flex flex-row">
        <p className="min-w-36 text-zinc-400 dark:text-zinc-500">Current</p>
        <Link
          className=""
          href="https://www.dnb.com/en-us/products/dnb-hoovers.html"
          target="_blank"
        >
          <Image
            className="rounded-full"
            src="/d&b.svg"
            width={40}
            height={40}
            alt="Dun & Bradstreet"
          />
        </Link>
      </div>
    </section>
  );
};
