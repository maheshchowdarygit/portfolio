import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check honeypot first for spam bots
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Silently accept to avoid alerting bot
      return NextResponse.json({ success: true, message: "Message sent successfully" });
    }

    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "mahesh@example.com";

    if (!apiKey) {
      console.warn(
        "RESEND_API_KEY is not defined. Simulating message dispatch:",
        { name, email, subject, message }
      );
      return NextResponse.json({
        success: true,
        simulated: true,
        message:
          "Thank you for reaching out! (Simulated mode: Message captured. Add RESEND_API_KEY in production to send live emails).",
      });
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `[Portfolio Contact] ${subject} - from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again or email directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
