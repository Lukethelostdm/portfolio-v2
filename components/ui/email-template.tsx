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
    <h1>Welcome, {firstName}!</h1>

    <p>
      Thank you for your message! I will get back to you as soon as possible!

      Just to make sure I have all the information possible, please find your message below:

      {message}
    </p>
  </div>
);