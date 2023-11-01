interface MessageProps {
	children: React.ReactNode;
}

export function Message({ children }: MessageProps) {
	return (
		<div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-2 text-sm border border-neutral-500/10">
			{children}
		</div>
	);
}
