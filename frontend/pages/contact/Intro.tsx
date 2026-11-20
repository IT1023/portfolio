import { useTranslation } from "react-i18next";
import Head from "../../shared/ui/Head";
import type { HeadProps } from "../../shared/lib/types";

export default function Intro() {
  const { t } = useTranslation("contact");
  const { img, subtitle, title } = t("head", {
    returnObjects: true,
  }) as HeadProps;

  return (
    <div className="w-full flex justify-center">
      <div className="container w-full max-w-7xl flex flex-col items-center">
        <Head img={img} subtitle={subtitle} title={title} />
      </div>
    </div>
  );
}
