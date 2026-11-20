import { useTranslation } from "react-i18next";
import Button from "../../shared/ui/Button";
import { useForm } from "react-hook-form";
import { useEffect, type FormEvent } from "react";
import useSubmitMessage from "../../shared/lib/useSubmitMessage";

interface FormProps {
  email: string;
  name: string;
  message: string;
}

export default function Form() {
  const { t } = useTranslation("contact");
  const { register, getValues } = useForm<FormProps>();
  const { isLoading, error, isSuccess, submitMessage } = useSubmitMessage();

  useEffect(() => {
    if (!error) return;
    console.log("failed", error);
  }, [error]);

  useEffect(() => {
    if (!isSuccess) return;
    console.log("success");
  }, [isSuccess]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitMessage(getValues());
  };

  return (
    <div className="w-full flex justify-center">
      <div className="container w-full max-w-7xl flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-col items-center gap-3"
        >
          <div className="w-full flex flex-col gap-1">
            <label
              className="text-md text-current/50 font-[Blinker]"
              htmlFor="email"
            >
              {t("form.email.label")}:
            </label>
            <input
              className="w-full p-1.5 text-sm border-2 border-divider rounded-sm"
              type="email"
              id="email"
              autoComplete="off"
              placeholder={t("form.email.placeholder")}
              {...register("email")}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              className="text-md text-current/50 font-[Blinker]"
              htmlFor="name"
            >
              {t("form.name.label")}:
            </label>
            <input
              className="w-full p-1.5 text-sm border-2 border-divider rounded-sm"
              type="text"
              id="name"
              autoComplete="off"
              placeholder={t("form.name.placeholder")}
              {...register("name")}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label
              className="text-md text-current/50 font-[Blinker]"
              htmlFor="message"
            >
              {t("form.message.label")}:
            </label>
            <textarea
              className="w-full rounded-sm p-2 text-sm text-current/75 border-2 border-divider"
              rows={6}
              id="message"
              placeholder={t("form.message.placeholder")}
              {...register("message")}
            ></textarea>
          </div>
          <Button
            disabled={isLoading}
            isLink={false}
            isFull={false}
            text={
              isLoading ? t("form.submit.placeholder") : t("form.submit.label")
            }
          />
        </form>
      </div>
    </div>
  );
}
