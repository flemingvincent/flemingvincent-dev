import { ExternalArrow, ExternalLink } from "@/components/external-link";
import { cn } from "@/lib/utils";

/** A list of link rows. Hovering or focusing one row dims its siblings. */
export const LinkList = ({ className, ...props }: React.ComponentProps<"ul">) => {
  return <ul className={cn("group/list flex flex-col gap-1", className)} {...props} />;
};

interface LinkListItemProps extends React.ComponentProps<typeof ExternalLink> {
  description: React.ReactNode;
}

export const LinkListItem = ({ children, description, className, ...props }: LinkListItemProps) => {
  return (
    <li className="transition-opacity duration-200 ease-out group-hover/list:opacity-45 group-has-[:focus-visible]/list:opacity-45 hover:opacity-100! has-[:focus-visible]:opacity-100!">
      <ExternalLink
        className={cn(
          "group -mx-3 flex flex-col rounded-lg p-3 transition-[background-color,transform] duration-150 ease-out hover:bg-hover focus-visible:bg-hover active:scale-[0.98]",
          className,
        )}
        {...props}
      >
        <span className="flex items-center gap-1">
          {children}
          <ExternalArrow />
        </span>
        <span className="text-muted">{description}</span>
      </ExternalLink>
    </li>
  );
};
