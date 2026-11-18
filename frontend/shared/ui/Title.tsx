import { useState } from "react";
import { useTranslation } from "react-i18next";

interface TitleProps {
  ns: string;
  path: string;
}

interface TitleContent {
  pic: string;
  catchphrase: string;
  name: string;
}

export default function Title({ ns, path }: TitleProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { t } = useTranslation(ns);
  const { name, catchphrase, pic } = t(path, {
    returnObjects: true,
  }) as TitleContent;

  return (
    <div
      className={`w-full flex-1 bg-foreground border-t-2 border-divider rounded-3xl overflow-hidden px-8 py-6 flex flex-col justify-center gap-4`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex justify-between w-full">
        <div className="w-20 rounded-[50px] aspect-square overflow-hidden flex">
          <img className="flex-1 object-cover" src={pic} alt={name} />
        </div>
        <div
          className={`${isHover ? "-translate-x-2" : "translate-x-0"} transition-all duration-400 ease-in-out`}
          aria-hidden
        >
          <img
            className="w-full max-w-12 h-full opacity-75"
            src="/img/arrow_left.svg"
            alt={"Arrow_Left"}
          />
        </div>
      </div>
      <p className="text-current/65 text-3xl line-clamp-2 max-w-[90%]">
        {catchphrase}
      </p>
      <h1 className="text-current/50 text-2xl font-mono font-semibold">
        {name}.
      </h1>
    </div>
  );
}
