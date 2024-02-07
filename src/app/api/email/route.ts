import { ContactFormValues } from "@/app/contact/type";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

function getMailTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
}

function getMailOptions({ name, email, message }: ContactFormValues) {
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Contact Form Submission - mohaimin.me`,
    text: `Sender: ${name} \nfrom: ${email}\nMessage: ${message}`,
  };

  return mailOptions;
}

const sendMailPromise = (payload: ContactFormValues) => {
  const transport = getMailTransporter();
  const mailOptions = getMailOptions(payload);

  return new Promise<string>((resolve, reject) => {
    transport.sendMail(mailOptions, function (err) {
      if (!err) {
        resolve("Email sent");
      } else {
        reject(err.message);
      }
    });
  });
};

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as ContactFormValues;

  try {
    await sendMailPromise(payload);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
