import type { Request, Response } from "express";
import { contactSchema } from "../utils/schemas.ts";
import { contactService } from "../services/contact.service.ts";

export const contactController = {
  incomingRequest: async function (req: Request, res: Response) {
    try {
      const body = req.body;
      const parsed = contactSchema.safeParse(body);
      if (!parsed.success)
        return res.status(400).json({ code: "bad", message: "Bad request..." });
      const { email, message, name } = parsed.data;
      const contactStatus = await contactService.incomingRequest(
        email,
        name,
        message,
      );
      if (!contactStatus)
        return res.status(422).json({
          code: "unprocessable",
          message: "cannot process request right now...",
        });
      return res.status(200).json({
        code: "success",
        message: "message delivered successfully...",
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ code: "internal", message: "Internal server error..." });
    }
  },
};
