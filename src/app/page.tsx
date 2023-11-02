import Link from "next/link";

import { Thread, Message } from "@/components";

export default function Index() {
	return (
		<main className="min-h-screen flex flex-1 items-center px-4 py-8">
			<div className="mx-auto w-96 space-y-6">
				<Thread>
					<Message>
						Hey, I&apos;m Vincent! A software engineer based in Jacksonville,
						Florida.
					</Message>
					<Message>
						I will be graduting in December from the University of Florida with
						a B.S. in Computer Science and a minor in Engineering Innovation.
					</Message>
					<Message>
						Currently, I&apos;m looking for full-time opportunities in software
						engineering!
					</Message>
				</Thread>
				<Thread>
					<Message>
						For the past few months, I&apos;ve been freelancing as a Software
						Engineer for Crosswater.
					</Message>
					<Message>
						At Crosswater, I&apos;ve had the opportunity to design and develop
						the company&apos;s{" "}
						<Link
							className="underline underline-offset-2"
							href="https://www.crosswaterturf.com/"
							target="_blank"
						>
							website
						</Link>
						, which I regularly maintain and improve.
					</Message>
					<Message>
						Most recently, I&apos;ve implemented a request quote feature which
						integrates directly with Yardbook.
					</Message>
				</Thread>
				<Thread>
					<Message>
						Previously, I was a Software Engineer at FLYJETS, where I worked on
						a few different web and mobile projects.
					</Message>
					<Message>
						With the help of one engineer, I was able to build and launch
						FLYJETS&apos;{" "}
						<Link
							className="underline underline-offset-2"
							href="https://apps.apple.com/us/app/flyjets/id1631026300"
							target="_blank"
						>
							iOS app
						</Link>{" "}
						from the ground up within two and a half months.
					</Message>
					<Message>
						As a result, I had the opportunity to oversee a small team of
						engineers in the development of FLYJETS&apos;{" "}
						<Link
							className="underline underline-offset-2"
							href="https://play.google.com/store/apps/details?id=com.flyjets.flyjetsmobile"
							target="_blank"
						>
							Android app
						</Link>
						.
					</Message>
					<Message>
						Additionally, I worked on a few different web projects, using React,
						Vue, and jQuery, where I implemented bug fixes and new features.
					</Message>
				</Thread>
				<Thread>
					<Message>
						In my free time I enjoy running, working out, and playing sports
						like soccer and pickleball.
					</Message>
					<Message>
						Also, I tend to work on a few side projects here and there, which
						you can find on my{" "}
						<Link
							className="underline underline-offset-2"
							href="https://github.com/FlemingVincent"
							target="_blank"
						>
							GitHub
						</Link>
						.
					</Message>
					<Message>
						If you&apos;d like to connect, feel free to reach out to me on{" "}
						<Link
							className="underline underline-offset-2"
							href="https://www.linkedin.com/in/vincentfleming/"
							target="_blank"
						>
							LinkedIn
						</Link>
						.
					</Message>
				</Thread>
			</div>
		</main>
	);
}
