import z from "zod";

export const contactSchema = z.object({
  email: z.email(),
  name: z
    .string()
    .nonempty()
    .regex(/[\w\s]{3,40}/),
  message: z.string().nonempty(),
});
