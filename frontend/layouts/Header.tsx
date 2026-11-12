import { useTranslation } from "react-i18next";
import Button from "../shared/ui/Button";
import Theme from "../features/themes/Theme";
import Language from "../features/languages/Language";
import MobileMenu from "../shared/ui/MobileMenu";
import Progress from "../features/progress/Progress";

interface NavElement {
  to: string;
  label: string;
}

export default function Header() {
  const { t } = useTranslation("header");
  const navElements = t("nav", {
    returnObjects: true,
  }) as NavElement[];
  return (
    <header className="fixed w-full bg-transparent h-15 shrink-0 backdrop-blur-[5px] flex gap-2 px-2 justify-center items-center">
      <Progress />
      <div className="w-full max-w-7xl flex justify-between items-center px-4">
        <div className="flex gap-2">
          <Button text={t("portfolio")} />
          <div className="md:hidden flex gap-2">
            <Theme />
            <Language />
          </div>
        </div>
        <div className="md:flex hidden gap-6">
          <nav className="flex items-center">
            <ul className="flex gap-4">
              {Array.isArray(navElements) &&
                navElements.map((nav) => {
                  return (
                    <li key={nav.label}>
                      <Button isLink={true} to={nav.to} text={nav.label} />
                    </li>
                  );
                })}
            </ul>
          </nav>
          <div className="flex gap-2 h-fit">
            <Theme />
            <Language />
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
