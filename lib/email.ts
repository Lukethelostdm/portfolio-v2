"use server";

import { EmailTemplate } from "@/components/ui/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {

    const { error } = await resend.emails.send({
      from: 'Luke <onboarding@resend.dev>',
      to: [emailFormData.email],
      subject: "Welcome",
      react: EmailTemplate({
        firstName: emailFormData.firstName,
        message: emailFormData.message, // Include the message here
      }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    console.error("Error sending email:", e);
    throw e;
  }
};