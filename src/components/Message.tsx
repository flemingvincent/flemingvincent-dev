import { Fragment } from "react";

interface MessageProps {
	children: React.ReactNode;
	isLast?: boolean;
}

export function Message({ children, isLast }: MessageProps) {
	return (
		<div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl p-2 text-sm px-3 relative shadow-sm dark:shadow-none">
			{children}
			{isLast && (
				<Fragment>
					<div className="absolute bottom-0.5 -right-1 h-4 w-4 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
					<div className="absolute bottom-0 -right-3 h-2 w-2 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
				</Fragment>
			)}
		</div>
	);
}
