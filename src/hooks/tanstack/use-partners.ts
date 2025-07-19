import { getPartners } from "@/services/service";
import { useLangStore } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";

export interface PartnersType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  link: string;
  image: Image;
}

export interface Image {
  path: string;
}

export const usePartners = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["partners", lang],
    queryFn: () => getPartners(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
