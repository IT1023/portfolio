import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export type TLanguage = "en" | "jp";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      common: {
        title: "it1023",
        language: {
          label: "日本語",
          ariaLabe: "言語を日本語に変更する",
        },
      },
    },
    jp: {
      common: {
        title: "いって1023",
        language: {
          label: "English",
          ariaLabe: "change language to english",
        },
      },
    },
  },
});

export default i18n;
