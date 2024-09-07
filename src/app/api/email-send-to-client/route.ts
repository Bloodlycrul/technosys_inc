import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { AdminEmailTemplate } from "@/components/emails/AdminEmail";
import { UserEmail } from "@/components/emails/UserEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Resend API key is not set" },
      { status: 500 }
    );
  }

  const { name, email, contact, service } = await req.json();
  if (!name || !email || !contact || !service) {
    return NextResponse.json(
      { error: "Please provide all the required information" },
      { status: 400 }
    );
  }

  try {
    const userEmailResult = await resend.emails.send({
      from: "Technosys Inc <noreply@email.technosysincor.com>",
      to: email,
      subject: "Welcome to Technosys Inc",
      react: await UserEmail({
        name,
        email,
        contactNumber: contact,
        services: Array.isArray(service) ? service : [service],
      }),
    });

    const adminEmailResult = await resend.emails.send({
      from: "Technosys Inc <noreply@email.technosysincor.com>",
      to: "em.gauravrana@gmail.com",
      subject: "New Client Inquiry",
      react: AdminEmailTemplate({
        name,
        email,
        contactNumber: contact,
        services: Array.isArray(service) ? service : [service],
      }),
    });

    if (userEmailResult.error || adminEmailResult.error) {
      console.error("User email error:", userEmailResult.error);
      console.error("Admin email error:", adminEmailResult.error);
      return NextResponse.json(
        { error: "Failed to send one or both emails" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
