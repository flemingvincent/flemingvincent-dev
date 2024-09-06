export type Work = {
	title: string;
	description: string;
	href: string;
	type: "freelance" | "contract" | "full-time";
};

export const work: Work[] = [
	{
		title: "The Ranch",
		description: "Marketplace for wholesale plants and nursery essentials",
		href: "https://theranchnursery.com",
		type: "freelance",
	},
	{
		title: "Crosswater",
		description: "Website for a landscaping company",
		href: "https://crosswaterturf.com",
		type: "freelance",
	},
	{
		title: "Flyjets",
		description: "Charter aviation marketplace for iOS, android, and web",
		href: "https://apps.apple.com/us/app/flyjets/id1631026300",
		type: "contract",
	},
	{
		title: "Flylab",
		description: "landing page for a design and development shop",
		href: "https://flylab.com",
		type: "contract",
	},
];
