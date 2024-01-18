import Image from "next/image";

interface ThreadProps {
	children: React.ReactNode;
}

export function Thread({ children }: ThreadProps) {
	return (
		<div className="flex flex-row items-end gap-x-4">
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
}
