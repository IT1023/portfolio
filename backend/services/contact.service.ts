import { contactRepo } from "../repos/contact.repo.ts";

export const contactService = {
  incomingRequest: async function (
    email: string,
    name: string,
    message: string,
  ): Promise<boolean> {
    try {
      const subject = `A new message`;
      const body = `
        FROM: ${email}\n,
        NAME: ${name}\n,
        MESSAGE:\n
        ${message}
      `;
      return await contactRepo.sendMessage(subject, body);
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};
