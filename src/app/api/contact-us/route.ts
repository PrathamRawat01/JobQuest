import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend'; // Named import

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();

    const { firstName, lastName, email, company, message } = body;

    const fromEmail = "Acme <onboarding@resend.dev>"; 

    try {
        const response = await resend.emails.send({
            from: fromEmail,
            to: "rawattora@gmail.com",  
            subject: `New Contact Us Message from ${firstName} ${lastName}`,
            text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Company: ${company}
        Message: ${message}
      `,
        });

        console.log("Email send result:", response);
        return NextResponse.json(response);
    } catch (error) {
        console.error("Error sending message:", error);
        return NextResponse.json({ error: error.message });
    }
}
