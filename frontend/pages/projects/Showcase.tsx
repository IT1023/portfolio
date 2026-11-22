import { useTranslation } from "react-i18next";
import Head from "../../shared/ui/Head";
import type { HeadProps } from "../../shared/lib/types";
import type { ProjectContent } from "../../shared/ui/Project";
import Project from "../../shared/ui/Project";

export default function Showcase() {
  const { t } = useTranslation("projects");
  const { img, subtitle, title } = t("showcase.head", {
    returnObjects: true,
  }) as HeadProps;
  const content = t("showcase.content", {
    returnObjects: true,
  }) as ProjectContent[];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
      <Head img={img} subtitle={subtitle} title={title} />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 place-items-center">
        {Array.isArray(content) &&
          content.map((c) => {
            return (
              <Project
                key={c.title}
                img={c.img}
                shortDescription={c.shortDescription}
                title={c.title}
                linkToOutside
                to={c.to}
              />
            );
          })}
      </div>
    </div>
  );
}
