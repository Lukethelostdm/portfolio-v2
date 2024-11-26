"use server";

import { EmailTemplate } from "@/components/ui/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    throw new Error("Missing environment variables: RESEND_API_KEY or RESEND_FROM_EMAIL.");
  }

  try {
    await resend.emails.send({
      from: `Luke Mcnicol <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Thank you for reaching out",
      react: EmailTemplate({
        firstName: emailFormData.firstName,
        message: emailFormData.message,
      }),
    });

    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};
