import { Language, useLangStore } from "@/store/lang";

export const useTranslate = (lang: "en" | "ru"): number => {
  return lang === Language.RU ? 0 : 1;
};

export const useWordsTranslate = (ru: string, en: string) => {
  const lang = useLangStore((state) => state.lang);

  if (lang === "ru") return ru;
  else return en;
};
