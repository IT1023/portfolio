import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { LANGS } from "../../shared/lib/constants";

export default function Language() {
  const { t, i18n } = useTranslation("common");
  const lang = i18n.language;

  useEffect(() => {
    document.title = t("title");
  }, [lang, t]);

  return (
    <div className="w-fit flex items-center gap-0.5">
      <span
        aria-hidden
        className="h-full flex justify-center text-xl tracking-tight items-center text-white/40"
      >
        <LanguageOutlinedIcon fontSize="inherit" color="inherit" />
      </span>
      <select
        className="border border-divider font-[Blinker] bg-foreground rounded-md px-1.75 py-0.75 text-white/65 cursor-pointer"
        name="languages"
        id="languages"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {LANGS.map((lang) => {
          return (
            <option
              key={lang.value}
              value={lang.value}
              aria-label={lang.ariaLabel}
              className="bg-background cursor-pointer"
            >
              {lang.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
