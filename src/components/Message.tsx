interface MessageProps {
	children: React.ReactNode;
}

export function Message({ children }: MessageProps) {
	return (
		<div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl p-2 text-sm px-3">
			{children}
		</div>
	);
}
