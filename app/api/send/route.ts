import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	const body = await req.json();

	try {
		const data = await resend.emails.send({
			from: "contact@flemingvincent.dev",
			to: `${body.email}`,
			subject: "Thank You for Reaching Out!",
			react: EmailTemplate({
				email: body.email,
			}),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
