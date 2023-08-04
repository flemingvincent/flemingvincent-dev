"use client";

import React from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Page() {
	const schema = z.object({
		email: z
			.string({
				required_error: "Whoops! Looks like you forgot to type in an email.",
			})
			.email({
				message: "Whoops! That doesn't look like a valid email.",
			}),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: z.infer<typeof schema>) => {
		try {
			await fetch("/api/send", {
				method: "POST",
				body: JSON.stringify({
					email: data.email,
				}),
			});
			toast.success("Email sent!", {
				className:
					"bg-neutral-50 dark:bg-neutral-950 border-[2px] border-neutral-400/10 text-neutral-950 dark:text-neutral-50",
			});
			reset();
		} catch (error) {
			console.error(error);
			toast.success("Whoops! Something went wrong.", {
				className:
					"bg-neutral-50 dark:bg-neutral-950 border-[2px] border-neutral-400/10 text-neutral-950 dark:text-neutral-50",
			});
		}
	};

	return (
		<div className="max-w-[67rem] mx-auto px-6">
			<div className="min-h-[75vh] flex flex-col justify-center py-6">
				<h1 className="text-[2.75rem] text-center text-neutral-950 dark:text-neutral-50 font-semibold font-display leading-[48px] mb-4 sm:text-[4.25rem] sm:leading-[1.1]">
					Mobile Designer
					<br />
					and Developer
				</h1>
				<p className="text-[1.0625rem] text-center text-neutral-800 dark:text-neutral-200 font-text mb-4 max-w-[26.25rem] mx-auto">
					Actively working at the intersection of design and development. Want
					to work together?
				</p>
				<form
					className={`mx-auto border-[2px] w-full flex items-center justify-center rounded-full p-[2px] max-w-[26.875rem] transition-all duration-300 ease-out mb-4 ${
						errors.email
							? "border-[#ff3f3f]/80 dark:border-[#ff3f3f]/80"
							: "border-neutral-400/10"
					}`}
					onSubmit={handleSubmit(onSubmit)}
				>
					<Input
						autoComplete="off"
						autoCapitalize="off"
						placeholder="Email"
						{...register("email")}
					/>
					<Button
						className="h-10 px-10 bg-neutral-800 dark:bg-neutral-200 hover:bg-black dark:hover:bg-white"
						disabled={!!errors.email}
					>
						Connect
					</Button>
				</form>
				<div className="mx-auto w-fit h-10 flex justify-center items-center border-[2px] border-neutral-400/10 rounded-full px-5 gap-x-4">
					<span className="relative flex h-2.5 w-2.5">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ca48] opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ca48]"></span>
					</span>
					<p className="text-[1.0625rem] text-center text-neutral-800 dark:text-neutral-200 font-text">
						Available for work
					</p>
				</div>
			</div>
			<div className="grid auto-rows-[16.5rem] grid-cols-1 md:grid-cols-3 gap-4 py-6">
				<div className="flex items-center justify-center rounded-xl border-[2px] border-neutral-400/10 bg-neutral-200 p-4 dark:bg-neutral-800 row-span-2 col-span-1 md:col-span-2">
					<p className="text-sm font-text text-neutral-800 dark:text-neutral-200">
						Coming Soon!
					</p>
				</div>
				<div className="flex items-center justify-center rounded-xl border-[2px] border-neutral-400/10 bg-neutral-200 p-4 dark:bg-neutral-800 row-span-1 col-span-1">
					<p className="text-sm font-text text-neutral-800 dark:text-neutral-200">
						Coming Soon!
					</p>
				</div>
				<div className="flex items-center justify-center rounded-xl border-[2px] border-neutral-400/10 bg-neutral-200 p-4 dark:bg-neutral-800 row-span-1 col-span-1">
					<p className="text-sm font-text text-neutral-800 dark:text-neutral-200">
						Coming Soon!
					</p>
				</div>
				<div className="flex items-center justify-center rounded-xl border-[2px] border-neutral-400/10 bg-neutral-200 p-4 dark:bg-neutral-800 row-span-1 col-span-1">
					<p className="text-sm font-text text-neutral-800 dark:text-neutral-200">
						Coming Soon!
					</p>
				</div>
				<div className="flex items-center justify-center rounded-xl border-[2px] border-neutral-400/10 bg-neutral-200 p-4 dark:bg-neutral-800 row-span-2 col-span-1 md:col-span-2">
					<p className="text-sm font-text text-neutral-800 dark:text-neutral-200">
						Coming Soon!
					</p>
				</div>
				<div className="flex items-center justify-center rounded-xl border-[2px] border-neutral-400/10 bg-neutral-200 p-4 dark:bg-neutral-800 row-span-1 col-span-1">
					<p className="text-sm font-text text-neutral-800 dark:text-neutral-200">
						Coming Soon!
					</p>
				</div>
			</div>
			<Toaster />
		</div>
	);
}
