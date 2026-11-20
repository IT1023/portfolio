import { useState } from "react";
import type { Reject } from "./types";
import z from "zod";

const contactSchema = z.object({
  email: z.email(),
  name: z
    .string()
    .nonempty()
    .regex(/[\w\s]{3,40}/),
  message: z.string().nonempty(),
});

export default function useSubmitMessage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Reject | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const submitMessage = async (obj: unknown) => {
    try {
      setIsLoading(true);
      setIsSuccess(false);
      setError(null);
      // simulation of a delay
      await new Promise((res) => setTimeout(res, 2000));
      const parsed = contactSchema.safeParse(obj);
      if (!parsed.success) {
        setError("MISMATCH");
        return;
      }
      const url: URL = new URL(
        "/api/v0/contact",
        import.meta.env.VITE_BASE_API_URL,
      );
      const options: RequestInit = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        if (response.status >= 500) setError("DOWN");
        else setError("SYSTEM");
        return;
      }
      setIsSuccess(true);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        setError("ABORT");
      } else {
        setError("SYSTEM");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, isSuccess, submitMessage };
}
