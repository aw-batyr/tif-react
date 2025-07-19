import { useLangStore } from "@/store/lang";

export const useLang = (data: string, data_2: string) => {
  const lang = useLangStore((state) => state.lang);
  if (lang === "ru") return data;
  else return data_2;
};
