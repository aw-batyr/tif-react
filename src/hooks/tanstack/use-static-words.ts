import { getStaticWords } from "@/services/service";
import { useLangStore } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";

export interface StaticType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  text: string;
  list: List[] | null;
  created_at: Date;
  updated_at: Date;
  key: string;
  pivot: Pivot;
}

export interface List {
  text_ru: string;
  text_en: string;
}

export interface Pivot {
  page_id: number;
  static_word_id: number;
}

export interface Pivot {
  page_id: number;
  static_word_id: number;
}

export const useStaticWords = (id: string) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["static-words", lang, id],
    queryFn: () => getStaticWords(lang, id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
