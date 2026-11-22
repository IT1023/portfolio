import { useTranslation } from "react-i18next";
import Head from "../../shared/ui/Head";
import type { HeadProps } from "../../shared/lib/types";
import Project, { type ProjectContent } from "../../shared/ui/Project";

export default function Portfolio() {
  const { t } = useTranslation("homepage");
  const { img, subtitle, title } = t("portfolio.head", {
    returnObjects: true,
  }) as HeadProps;
  const content = t("portfolio.content", {
    returnObjects: true,
  }) as ProjectContent[];

  return (
    <div className="flex flex-col items-center gap-6">
      <Head img={img} subtitle={subtitle} title={title} />
      <div className="w-full flex gap-4 flex-wrap justify-center">
        {Array.isArray(content) &&
          content.map((c) => {
            return (
              <Project
                img={c.img}
                shortDescription={c.shortDescription}
                title={c.title}
              />
            );
          })}
      </div>
    </div>
  );
}
