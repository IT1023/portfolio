import { useTranslation } from "react-i18next";
import type { ArticleContent } from "../../pages/projects/Articles";
import type { TLanguage } from "../../config/i18n";
import Modal from "../../features/modal/Modal";
import { format } from "../lib/helpers";
import Markdown from "react-markdown";

export default function Article({
  dates,
  content,
  tag,
  title,
}: ArticleContent) {
  const { i18n } = useTranslation();
  const lang = i18n.language as TLanguage;
  const fullTitle = title[lang];
  const fullContent = content[lang];

  return (
    <div className="bg-foreground border-t-2 border-divider p-2 aspect-4/3 rounded-xl overflow-hidden flex">
      <Modal
        trigger={
          <button className="flex-1 flex flex-col gap-1 cursor-pointer">
            <div className="w-full flex-1 overflow-hidden flex justify-center items-center">
              <span aria-hidden className="lg:text-6xl md:text-3xl text-xl">
                {tag}
              </span>
            </div>
            <p className="p-2 rounded-md bg-background text-left w-full h-20 overflow-hidden line-clamp-3 shrink-0">
              {fullTitle}
            </p>
          </button>
        }
        blurBackground
      >
        <article className="fixed w-screen h-screen p-2 bg-foreground z-9999 flex flex-col gap-2 items-center">
          <p className="w-full rounded-md backdrop-blur-3xl max-w-xl truncate text-center p-1 font-[Blinker] text-lg text-current/50">
            {title[lang]}
          </p>
          <p className="w-full max-w-lg text-center p-1 font-[Blinker] text-current/50 italic">
            {format("ja-JP", dates)}
          </p>
          <div className="flex-1 w-full max-w-7xl p-2 bg-background rounded-lg overflow-x-hidden overflow-y-scroll scrollbar-thin">
            <div className="px-4 py-2 font-[Blinker] text-current/50 text-lg">
              <Markdown>{fullContent}</Markdown>
            </div>
          </div>
        </article>
      </Modal>
    </div>
  );
}
