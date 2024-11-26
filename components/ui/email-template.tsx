import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
}) => (
  <div>
    <h1>Hey, {firstName}!</h1>
    <p>Thank you for reaching out to me, I will get back to you as soon as possible.
      In the mean time I have attached a copy of our conversation below for you to review too.
      If you have any questions or concerns at all, you can reach me at luke@lukethewebdev.uk , which is where I will email you from too.
    </p>
    <p>{message}</p>
  </div>
);