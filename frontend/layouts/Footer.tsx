import { useTranslation } from "react-i18next";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <footer className="w-full h-45 shrink-0 flex justify-center p-2">
      <div className="w-full max-w-4xl h-full border border-divider rounded-2xl flex flex-col overflow-hidden">
        <div className="w-full flex-1 p-2 flex md:flex-row flex-col gap-2 flex-wrap text-current/30 md:justify-between items-center">
          <span className="w-fit text-5xl flex gap-2 items-center">
            <EmailOutlinedIcon fontSize="inherit" color="inherit" />
            <p className="text-base text-current">{t("workWithMe")}</p>
          </span>
          <a
            className="w-fit bg-primary capitalize py-1.5 text-md px-4 truncate font-[Blinker] text-white/65 rounded-[50px] text-lg"
            href="mailto:mohamedtahahalim@gmail.com"
          >
            {t("emailMe")}
          </a>
        </div>
        <span className="w-full h-8 bg-foreground flex justify-center items-center">
          <p className="font-[Blinker] text-current/50 text-sm">
            {t("promise")}
          </p>
        </span>
      </div>
    </footer>
  );
}
