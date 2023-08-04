import React from "react";

import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Tailwind } from "@react-email/tailwind";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/hr";
import { Row } from "@react-email/row";
import { Column } from "@react-email/column";

interface EmailTemplateProps {
	email: string;
}

export function EmailTemplate({ email }: EmailTemplateProps) {
	const previewText = `My name is Vincent Fleming, and I am a junior frontend engineer.`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-[#fafafa] my-auto mx-auto">
					<Container className="mx-auto p-6 w-[465px]">
						<Section className="mt-8">
							<Img
								src="https://avatars.githubusercontent.com/u/80268905?v=4"
								width={100}
								height={100}
								alt="Vercel"
								className="my-0 mx-auto"
							/>
						</Section>
						<Section>
							<Heading className="text-[2.75rem] text-center text-neutral-950 font-semibold font-display leading-[48px]">
								Thank You for Reaching Out!
							</Heading>
							<Text className="text-[1.0625rem] text-neutral-800 font-text">
								Hello{" "}
								<span className="font-semibold font-display">{email}</span>,
							</Text>
							<Text className="text-[1.0625rem] text-neutral-800 font-text">
								My name is Vincent Fleming, and I am a junior frontend engineer
								who specializes in mobile design and development.
							</Text>
							<Text className="text-[1.0625rem] text-neutral-800 font-text">
								Over the course of my academic and professional career, I have
								had the opportunity to work on several projects including:{" "}
								<Link href="https://apps.apple.com/us/app/flyjets/id1631026300https://apps.apple.com/us/app/flyjets/id1631026300">
									FLYJETS
								</Link>
								, <Link href="https://ftnsapp.com">FTNS</Link>, and Circle.
							</Text>
							<Text className="text-[1.0625rem] text-neutral-800 font-text">
								These opportunities have allowed me to hone my skills in React,
								React Native, and TypeScript, igniting my passion to create
								user-friendly and visually appealing experiences.
							</Text>
							<Text className="text-[1.0625rem] text-neutral-800 font-text">
								If you have any questions or if you're interested in working
								together, please let me know and I will get back to you as soon
								as possible.
							</Text>
							<Text className="text-[1.0625rem] text-neutral-800 font-text">
								Thank you for your interest in learning more about me. Looking
								forward to connecting with you soon!
							</Text>
							<Text className="text-[1.0625rem] text-neutral-800 font-text">
								Best regards,
								<br />
								Vincent Fleming
							</Text>
						</Section>
						<Hr className="border-[1px] border-solid border-neutral-400/10 my-4 mx-0 w-full" />
						<Row>
							<Column align="left">
								<Link href="https://www.linkedin.com/in/vincentfleming">
									<Text className="text-center text-sm text-neutral-500">
										LinkedIn
									</Text>
								</Link>
							</Column>
							<Column align="center">
								<Link href="https://github.com/FlemingVincent">
									<Text className="text-center text-sm text-neutral-500">
										GitHub
									</Text>
								</Link>
							</Column>
							<Column align="right">
								<Link href="https://twitter.com/veesentayy">
									<Text className="text-center text-sm text-neutral-500">
										Twitter
									</Text>
								</Link>
							</Column>
						</Row>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}

export default EmailTemplate;
