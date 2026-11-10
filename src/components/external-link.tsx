import Link from "next/link";

import { cn } from "@/lib/utils";

interface ExternalLinkProps extends Omit<React.ComponentProps<typeof Link>, "target" | "rel"> {}

/** A link that always opens off-site in a new tab, and says so to screen readers. */
export const ExternalLink = ({ children, ...props }: ExternalLinkProps) => {
  return (
    <Link {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </Link>
  );
};

/** ↗ that nudges toward its corner while the enclosing `group` is hovered or focused. */
export const ExternalArrow = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "size-3.5 shrink-0 text-muted transition-transform duration-200 ease-out-quint group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5",
        className,
      )}
      {...props}
    >
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
};
