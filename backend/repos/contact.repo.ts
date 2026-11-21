import nodemailer from "nodemailer";
import "../config/dotenv.ts";
import { escapeHtml } from "../utils/helpers.ts";

const port = Number(process.env.SMTP_PORT ?? 587);

export const contactRepo = {
  sendMessage: async function (
    subject: string,
    body: string,
  ): Promise<boolean> {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: process.env.SMTP_USERNAME, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.MAIL_FROM, // must be an address your SMTP account is allowed to send from
        to: process.env.MAIL_TO, // your own inbox
        subject: `${subject}`,
        text: `${body}`,
        html: `<p>${escapeHtml(body).replace(/\r?\n/g, "<br>")}</p>`,
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};
