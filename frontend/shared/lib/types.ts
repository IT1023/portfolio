import type { TLanguage } from "../../config/i18n";

export interface LanguageOption {
  value: TLanguage;
  label: string;
  ariaLabel: string;
}

export interface HeadProps {
  subtitle: string;
  title: string;
  img: string;
}
