import { useTranslation } from "react-i18next";
import type { HeadProps } from "../../shared/lib/types";
import Head from "../../shared/ui/Head";
import Accordion from "../../shared/ui/Accordion";

interface Question {
  title: string;
  message: string;
}

export default function FAQ() {
  const { t } = useTranslation("homepage");
  const { img, subtitle, title } = t("faq.head", {
    returnObjects: true,
  }) as HeadProps;
  const questions = t("faq.questions", {
    returnObjects: true,
  }) as Question[];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col gap-6 items-center">
        <Head img={img} subtitle={subtitle} title={title} />
        <div className="w-full flex flex-col items-center gap-1">
          {Array.isArray(questions) &&
            questions.map((q) => {
              return (
                <Accordion key={q.title} content={q.message} text={q.title} />
              );
            })}
        </div>
      </div>
    </div>
  );
}
