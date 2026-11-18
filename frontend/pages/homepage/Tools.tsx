import { useTranslation } from "react-i18next";
import Head from "../../shared/ui/Head";
import type { HeadProps } from "../../shared/lib/types";
import Tech from "../../shared/ui/Tech";

export interface TechProps {
  icon: string;
  tech: string;
}

interface ToolsContent {
  title: string;
  elements: TechProps[];
  footer: string;
}

export default function Tools() {
  const { t } = useTranslation("homepage");
  const { img, subtitle, title } = t("tools.head", {
    returnObjects: true,
  }) as HeadProps;
  const toolsContent = t("tools.content", {
    returnObjects: true,
  }) as ToolsContent;

  return (
    <div className="flex flex-col items-center gap-6">
      <Head img={img} subtitle={subtitle} title={title} />
      <div className="w-full flex flex-col items-center gap-1 flex-wrap justify-center">
        <div className="w-full max-w-7xl flex flex-col rounded-2xl overflow-hidden border border-divider">
          <div className="w-full h-10 flex items-center justify-center bg-foreground border-b border-divider">
            <h1 className="text-md text-current/50 font-[Blinker] uppercase tracking-wide">
              {toolsContent.title}
            </h1>
          </div>
          <div className="flex-1 flex gap-6 justify-center gap-y-10 flex-wrap py-4 px-8 pb-14">
            {Array.isArray(toolsContent.elements) &&
              toolsContent.elements.map((t) => {
                return <Tech key={t.tech} icon={t.icon} tech={t.tech} />;
              })}
          </div>
        </div>
        <p className="text-sm italic font-[Blinker] text-current/50">
          {toolsContent.footer}
        </p>
      </div>
    </div>
  );
}
