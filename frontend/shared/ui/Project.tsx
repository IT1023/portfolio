import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetTheme } from "../../features/themes/ThemeContext";

interface ProjectContent {
  title: string;
  shortDescription: string;
  img: string;
}

interface ProjectProps {
  ns: string;
  path: string;
}

export default function Project({ ns, path }: ProjectProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { t, i18n } = useTranslation(ns);
  const { currentTheme } = useGetTheme();
  const lang = i18n.language;
  const content = t(path, {
    returnObjects: true,
  }) as ProjectContent;
  const { title, shortDescription, img } = content;

  return (
    <Link to={"/projects"}>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="w-full max-w-135 bg-foreground/50 hover:bg-foreground rounded-xl border-t-2 border-divider aspect-4/3.5 p-4 overflow-hidden flex flex-col gap-2"
      >
        <div className="px-4 flex justify-between">
          <div className="flex flex-col">
            <h1 className="sm:text-2xl text-lg text-current/90">{title}</h1>
            <h3 className="sm:text-[16.5px] text-sm text-current/40 font-[Blinker]">
              {shortDescription}
            </h3>
          </div>
          <div className="relative flex" aria-hidden>
            <span
              className={`w-8 h-8 ${isHover ? "bg-primary" : "bg-background"} rounded-[50px] transition-all duration-300 ease-in-out`}
            ></span>
            <span
              className={`w-10 h-10 ${isHover ? "-translate-x-5" : "-translate-x-4"} -translate-y-1 transition-all duration-300 ease-in-out`}
            >
              <img src="/img/arrow_left.svg" alt="" />
            </span>
          </div>
        </div>
        <div
          className={`flex-1 max-w-100 rounded-lg overflow-hidden ${isHover ? "rotate-1" : ""} transition-all duration-300 ease-in-out`}
          aria-hidden
        >
          <img
            className="w-full h-full z-1 object-cover"
            src={`${img}_${currentTheme}_${lang}.webp`}
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
}
