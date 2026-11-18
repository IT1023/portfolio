import { useTranslation } from "react-i18next";
import Head from "../../shared/ui/Head";
import Tablist from "../../shared/ui/Tablist";
import type { HeadProps } from "../../shared/lib/types";

export default function Background() {
  const { t } = useTranslation("homepage");
  const { img, subtitle, title } = t("background.head", {
    returnObjects: true,
  }) as HeadProps;
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-3 items-center">
        <Head img={img} title={title} subtitle={subtitle} />
        <Tablist ns="homepage" path="background.journey" />
      </div>
    </div>
  );
}
