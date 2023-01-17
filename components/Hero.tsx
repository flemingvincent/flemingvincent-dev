// @ts-nocheck
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export const Hero = () => {
	const marqueeText = "Developer. Designer. Student. ";

	return (
		<div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-74px)] bg-[#eeeeee] dark:bg-[#111111] relative overflow-hidden">
			<motion.div
				className="flex items-center justify-center mb-4"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.5,
					delay: 0.5,
					ease: "easeOut",
					type: "spring",
					stiffness: 100,
				}}
			>
				<h1 className="text-[4rem] tablet:text-[9rem] laptop:text-[14rem] desktop:text-[22rem] text-black dark:text-white text-center font-black tracking-tighter">
					VINCENT©
				</h1>
				<motion.div
					className="absolute bg-[#aaf300] h-[24px] w-[120vw]"
					initial={{ y: 25, opacity: 0, rotate: -7 }}
					animate={{ y: 0, opacity: 1, rotate: -7 }}
					transition={{
						duration: 0.5,
						delay: 1,
						ease: "easeOut",
					}}
				>
					<Marquee gradient={false} className="text-base text-black font-bold">
						{marqueeText.repeat(48)}
					</Marquee>
				</motion.div>
				<Image
					src="/avatar.png"
					width={128}
					height={128}
					alt="avatar"
					className="hidden laptop:flex laptop:absolute"
				/>
			</motion.div>
			<motion.div
				className="flex flex-col items-center"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 0.5,
					delay: 0.75,
					ease: "easeOut",
				}}
			>
				<h1 className="text-[28px] text-black dark:text-white text-center font-bold tracking-tighter tablet:max-w-[50vw] mb-4">
					Developer. Designer. Student.
				</h1>
				<h2 className="text-base text-[#999999] text-center font-normal tablet:max-w-[50vw] px-4 mb-6">
					I design <span className="font-mono">body</span> with{" "}
					<span className="font-mono">style</span> from{" "}
					<span className="font-mono">head</span>, pushing{" "}
					<span className="font-mono">code</span> to billions of users.
				</h2>
				{/* Light */}
				<div className="flex dark:hidden max-w-[375px]">
					<Marquee
						className="flex dark:hidden"
						gradientColor={[238, 238, 238]}
						direction="right"
					>
						<div className="flex flex-row gap-x-4">
							<Image src="/js.svg" width={40} height={40} alt="js" />
							<Image src="/ts.svg" width={40} height={40} alt="ts" />
							<Image src="/react.svg" width={40} height={40} alt="react" />
							<Image src="/rn.svg" width={40} height={40} alt="rn" />
							<Image src="/tw.svg" width={40} height={40} alt="tw" />
							<Image src="/figma.svg" width={40} height={40} alt="figma" />
							<Image
								src="/expo.svg"
								width={40}
								height={40}
								alt="expo"
								className="mr-4"
							/>
						</div>
					</Marquee>
				</div>
				{/* Dark */}
				<div className="hidden dark:flex max-w-[375px]">
					<Marquee gradientColor={[17, 17, 17]} direction="right">
						<div className="flex flex-row gap-x-4">
							<Image src="/js.svg" width={40} height={40} alt="js" />
							<Image src="/ts.svg" width={40} height={40} alt="ts" />
							<Image src="/react.svg" width={40} height={40} alt="react" />
							<Image src="/rn.svg" width={40} height={40} alt="rn" />
							<Image src="/tw.svg" width={40} height={40} alt="tw" />
							<Image src="/figma.svg" width={40} height={40} alt="figma" />
							<Image
								src="/expo.svg"
								width={40}
								height={40}
								alt="expo"
								className="mr-4"
							/>
						</div>
					</Marquee>
				</div>
			</motion.div>
		</div>
	);
};
