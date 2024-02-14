import React from "react";
import Image from "next/image";

const Thread = React.forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement>
>(({ children, ...props }, ref) => {
	return (
		<div className="flex flex-row items-end gap-x-4" ref={ref} {...props}>
			<div className="flex flex-1 flex-col gap-y-2">{children}</div>
			<Image
				className="rounded-full"
				src="/avatar.png"
				alt="avatar"
				width={24}
				height={24}
				quality={100}
			/>
		</div>
	);
});

export { Thread };
