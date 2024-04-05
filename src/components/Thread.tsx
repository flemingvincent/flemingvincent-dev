import React from "react";
import Image from "next/image";

interface ThreadProps {
	isLast?: boolean;
}

const Thread = React.forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement> & ThreadProps
>(({ children, isLast, ...props }, ref) => {
	return (
		<div
			className="flex flex-row items-end gap-x-4 relative"
			ref={ref}
			{...props}
		>
			<Image
				className="rounded-full"
				src="/avatar.png"
				alt="avatar"
				width={24}
				height={24}
				quality={100}
			/>
			<div className="flex flex-1 flex-col gap-y-2">{children}</div>
			{isLast && (
				<p className="absolute -bottom-8 left-8 text-sm opacity-50">Seen</p>
			)}
		</div>
	);
});

export { Thread };
