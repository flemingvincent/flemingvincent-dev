import React, { Fragment } from "react";

interface MessageProps {
	isLast?: boolean;
}

const Message = React.forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement> & MessageProps
>(({ children, isLast, ...props }, ref) => {
	return (
		<div
			className="bg-neutral-200 dark:bg-neutral-800 rounded-[1.25rem] text-sm px-4 py-2.5 relative"
			ref={ref}
			{...props}
		>
			{children}
			{isLast && (
				<Fragment>
					<div className="absolute -bottom-[1px] -left-1 h-[22px] w-[22px] bg-neutral-200 dark:bg-neutral-800 rounded-full" />
					<div className="absolute -bottom-1 -left-2 h-1.5 w-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
				</Fragment>
			)}
		</div>
	);
});

export { Message };
