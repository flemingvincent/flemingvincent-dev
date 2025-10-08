import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-col">
      <Link className="font-medium" href="/">
        Vincent Fleming
      </Link>
      <span className="font-medium text-[#63635E]">Software Engineer</span>
    </header>
  );
};
