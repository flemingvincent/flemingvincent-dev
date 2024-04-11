import Link from "next/link";

import { Thread, Message } from "@/components";

export default function Index() {
	return (
		<main className="min-h-screen flex flex-1 items-center px-5 py-12">
			<div className="mx-auto w-96 space-y-6">
				<Thread>
					<Message>
						Hey, I&apos;m Vincent, a software engineer based in Jacksonville,
						Florida.
					</Message>
					<Message>
						I recently graduated from the University of Florida with a B.S. in
						Computer Science and a minor in Engineering Innovation.
					</Message>
					<Message isLast>
						Currently, I&apos;m pursuing full-time software engineering
						opportunities!
					</Message>
				</Thread>
				<Thread>
					<Message>
						For the past few months, I&apos;ve been freelancing as a Software
						Engineer for Crosswater.
					</Message>
					<Message>
						At Crosswater, I&apos;ve had the opportunity to design and develop{" "}
						<Link href="https://www.crosswaterturf.com/" target="_blank">
							<span className="inline-flex hover:animate-background-shine bg-[linear-gradient(110deg,#007AFF,45%,#32ADE6,55%,#007AFF)] dark:bg-[linear-gradient(110deg,#0A84FF,45%,#64D2FF,55%,#0A84FF)] bg-[length:250%_100%] bg-clip-text text-transparent font-medium">
								Crosswater&apos;s website
							</span>
						</Link>
						, which I regularly maintain and improve.
					</Message>
					<Message isLast>
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
						With the help of one engineer, I was able to build and launch{" "}
						<Link
							href="https://apps.apple.com/us/app/flyjets/id1631026300"
							target="_blank"
						>
							<span className="inline-flex hover:animate-background-shine bg-[linear-gradient(110deg,#007AFF,45%,#32ADE6,55%,#007AFF)] dark:bg-[linear-gradient(110deg,#0A84FF,45%,#64D2FF,55%,#0A84FF)] bg-[length:250%_100%] bg-clip-text text-transparent font-medium">
								FLYJETS&apos; iOS
							</span>
						</Link>{" "}
						from the ground up within two and a half months.
					</Message>
					<Message>
						As a result, I had the opportunity to oversee a small team of
						engineers in the development of{" "}
						<Link
							href="https://play.google.com/store/apps/details?id=com.flyjets.flyjetsmobile"
							target="_blank"
						>
							<span className="inline-flex hover:animate-background-shine bg-[linear-gradient(110deg,#007AFF,45%,#32ADE6,55%,#007AFF)] dark:bg-[linear-gradient(110deg,#0A84FF,45%,#64D2FF,55%,#0A84FF)] bg-[length:250%_100%] bg-clip-text text-transparent font-medium">
								FLYJETS&apos; Android.
							</span>
						</Link>
					</Message>
					<Message isLast>
						Additionally, I worked on a few different web projects, using React,
						Vue, and jQuery, where I implemented bug fixes and new features.
					</Message>
				</Thread>
				<Thread isLast>
					<Message>
						In my free time I enjoy running, working out, and playing
						golf.
					</Message>
					<Message>
						Also, I tend to work on a few side projects here and there, which
						you can find on my{" "}
						<Link href="https://github.com/FlemingVincent" target="_blank">
							<span className="inline-flex hover:animate-background-shine bg-[linear-gradient(110deg,#007AFF,45%,#32ADE6,55%,#007AFF)] dark:bg-[linear-gradient(110deg,#0A84FF,45%,#64D2FF,55%,#0A84FF)] bg-[length:250%_100%] bg-clip-text text-transparent font-medium">
								GitHub.
							</span>
						</Link>
					</Message>
					<Message isLast>
						If you&apos;d like to connect, feel free to reach out to me on{" "}
						<Link
							href="https://www.linkedin.com/in/vincentfleming/"
							target="_blank"
						>
							<span className="inline-flex hover:animate-background-shine bg-[linear-gradient(110deg,#007AFF,45%,#32ADE6,55%,#007AFF)] dark:bg-[linear-gradient(110deg,#0A84FF,45%,#64D2FF,55%,#0A84FF)] bg-[length:250%_100%] bg-clip-text text-transparent font-medium">
								LinkedIn.
							</span>
						</Link>
					</Message>
				</Thread>
			</div>
		</main>
	);
}
