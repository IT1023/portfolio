import type { SvgIconComponent } from "@mui/icons-material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import ArticleIcon from "@mui/icons-material/Article";

const icons: Record<string, SvgIconComponent> = {
  default: SchoolIcon,
  education: SchoolIcon,
  work: ComputerIcon,
  articles: ArticleIcon,
};

interface TabListProps {
  ns: string;
  path: string;
}

interface Content {
  icon: string;
  title: string;
  content: string;
  dates?: string[];
  link?: string;
}

interface TabContent {
  icon: string;
  title: string;
  content: Content[];
}

export default function Tablist({ ns, path }: TabListProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { t } = useTranslation(ns);
  const tabElements = t(path, {
    returnObjects: true,
  }) as TabContent[];

  return (
    <div className="w-fit flex flex-col gap-3">
      <div className="bg-foreground p-1 rounded-[50px] flex gap-1">
        {Array.isArray(tabElements) &&
          tabElements.map((t, index) => {
            const Icon = icons[t.icon || "default"];
            return (
              <button
                className={`h-full py-2 px-4 w-fit text-current/50 text-md min-w-25 min-h-8 flex items-center gap-2 rounded-[50px] ${index === activeTab && "bg-background"}`}
                key={t.title}
                onClick={() => setActiveTab(index)}
              >
                <span aria-hidden className="text-md flex items-center">
                  <Icon fontSize="inherit" color="inherit" />
                </span>
                <h1 className="font-[Blinker] truncate">{t.title}</h1>
              </button>
            );
          })}
      </div>
      <div className="w-full p-1 rounded-xl overflow-hidden flex flex-col gap-2">
        {Array.isArray(tabElements) &&
          tabElements[activeTab].content.map((c) => {
            const Icon = icons[c.icon || "default"];
            return (
              <div
                key={c.title}
                className="w-full px-1 py-3 bg-foreground rounded-xl flex gap-3 pl-8 border-t-2 border-divider"
              >
                <span className="text-2xl text-current/50">
                  <Icon fontSize="inherit" color="inherit" />
                </span>
                <div className="flex-1 flex flex-col">
                  <h1 className="text-md font-[Blinker] max-w-50 truncate">
                    {c.title}
                  </h1>
                  <h3 className="max-w-65 text-sm text-current/50 truncate">
                    {c.content}
                  </h3>
                  {c.dates && (
                    <h5 className="text-[11px] text-current/50">{`${c.dates[0]} - ${c.dates[1]}`}</h5>
                  )}
                  {c.link && (
                    <a
                      className="text-sm text-current/50 font-[Blinker] underline w-fit"
                      href={c.link}
                      target="_blank"
                    >
                      Link
                    </a>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
