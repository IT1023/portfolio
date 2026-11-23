import type { LanguageOption } from "./types";

export const LANGS: LanguageOption[] = [
  {
    value: "en",
    label: "🇺🇸",
    ariaLabel: "English",
  },
  {
    value: "jp",
    label: "🇯🇵",
    ariaLabel: "日本語",
  },
];

export const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  "summary",
  "iframe",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
  "[tabindex]",
].join(",");
