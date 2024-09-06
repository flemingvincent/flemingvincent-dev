export type Project = {
	title: string;
	description: string;
	href: string;
	type: "open-source" | "personal" | "school";
};

export const projects: Project[] = [
	{
		title: "Expo Supabase Starter",
		description:
			"starter project for React Native applications with Expo and Supabase",
		href: "https://github.com/FlemingVincent/expo-supabase-starter",
		type: "open-source",
	},
	{
		title: "Circles",
		description: "location-sharing application for friend groups",
		href: "https://github.com/flemingvincent/circles",
		type: "school",
	},
];
