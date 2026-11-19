import { useTranslation } from "react-i18next";
import Head from "../../shared/ui/Head";
import type { HeadProps } from "../../shared/lib/types";
import Card from "../../shared/ui/Card";

interface CardProps {
  pic: string;
  text: string;
}

export default function Hero() {
  const { t } = useTranslation("about");
  const { subtitle, title, img } = t("main.head", {
    returnObjects: true,
  }) as HeadProps;
  const card = t("main.title", {
    returnObjects: true,
  }) as CardProps;

  return (
    <div className="flex flex-col gap-6 items-center">
      <Head img={img} subtitle={subtitle} title={title} />
      <div className="flex flex-wrap gap-2 justify-center">
        <Card pic={card.pic} text={card.text} />
        <p className="p-2 font-[Blinker] text-[18px] text-current/50 max-w-125">
          {t("main.description")}
        </p>
      </div>
    </div>
  );
}
