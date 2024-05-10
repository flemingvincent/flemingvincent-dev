export function TailwindIndicator() {
	return (
		<div className="fixed bottom-5 left-5 z-50 flex items-center  rounded-full bg-black px-2.5 py-1 text-xs font-medium text-white">
			<span className="sm:hidden">XS</span>
			<span className="hidden sm:inline md:hidden">SM</span>
			<span className="hidden md:inline lg:hidden">MD</span>
			<span className="hidden lg:inline xl:hidden">LG</span>
			<span className="hidden xl:inline 2xl:hidden">XL</span>
			<span className="hidden 2xl:inline">2XL</span>
		</div>
	);
}
