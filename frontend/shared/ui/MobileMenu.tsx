import MenuIcon from "@mui/icons-material/Menu";
import Modal from "../../features/modal/Modal";
import { useTranslation } from "react-i18next";
import Button from "./Button";

interface NavElement {
  to: string;
  label: string;
}

export default function MobileMenu() {
  const { t } = useTranslation("header");
  const navElements = t("nav", {
    returnObjects: true,
  }) as NavElement[];

  return (
    <div className="md:hidden flex h-full p-1 bg-foreground border-t-2 border-divider cursor-pointer rounded-sm">
      <Modal
        trigger={<MenuIcon fontSize="small" className="text-current/50" />}
        blurBackground
      >
        <div className="fixed top-0 right-0 w-screen max-w-70 bg-foreground border-t-2 border-divider h-screen px-2 py-4 flex flex-col justify-between">
          <nav className="w-full p-2">
            <ul className="w-full space-y-2">
              {Array.isArray(navElements) &&
                navElements.map((nav) => {
                  return (
                    <li className="w-full" key={nav.label}>
                      <Button
                        isFull={true}
                        isLink={true}
                        to={nav.to}
                        text={nav.label}
                      />
                    </li>
                  );
                })}
            </ul>
          </nav>
          <span className="w-full flex justify-center text-sm text-current/50 font-[Blinker] font-semibold">
            🩵 it1023_.
          </span>
        </div>
      </Modal>
    </div>
  );
}
