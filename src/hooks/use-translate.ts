import { Language } from "@/store/lang";

export const useTranslate = (lang: "en" | "ru"): number => {
  return lang === Language.RU ? 0 : 1;
};
