import { useTranslation } from "react-i18next";

interface SquareContent {
  img: string;
  title: string;
  button: {
    link: string;
    label: string;
  };
}

interface SquareProps {
  ns: string;
  path: string;
}

export default function Square({ ns, path }: SquareProps) {
  const { t } = useTranslation(ns);
  const content = t(path, {
    returnObjects: true,
  }) as SquareContent;
  const { img, title, button } = content;

  return (
    <div className="w-full max-h-85 flex-1 rounded-xl px-2 py-4 flex flex-col gap-5 justify-evenly items-center overflow-hidden aspect-square bg-foreground border-t-2 border-divider">
      <div
        className="w-full max-w-15 aspect-square overflow-hidden text-current/60 text-6xl"
        aria-hidden
      >
        <img className="w-full h-full object-cover" src={img} alt="icon" />
      </div>
      <p className="text-4xl text-center text-current/50">{title}</p>
      <a
        className="w-fit bg-primary capitalize py-1.5 text-md px-4 truncate font-[Blinker] text-white/65 rounded-[50px] text-lg"
        href={button.link}
      >
        {button.label}
      </a>
    </div>
  );
}
