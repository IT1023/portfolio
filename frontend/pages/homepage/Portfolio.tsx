import { useTranslation } from "react-i18next";
import Head from "../../shared/ui/Head";
import type { HeadProps } from "../../shared/lib/types";
import Project from "../../shared/ui/Project";

export default function Portfolio() {
  const { t } = useTranslation("homepage");
  const { img, subtitle, title } = t("portfolio.head", {
    returnObjects: true,
  }) as HeadProps;

  return (
    <div className="flex flex-col items-center gap-6">
      <Head img={img} subtitle={subtitle} title={title} />
      <div className="w-full flex gap-4 flex-wrap justify-center">
        <Project ns="homepage" path="portfolio.content.first" />
        <Project ns="homepage" path="portfolio.content.second" />
      </div>
    </div>
  );
}
