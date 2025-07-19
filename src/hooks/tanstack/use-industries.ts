import { getIndustries } from "@/services/service";
import { useLangStore } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";

export interface IndustriesType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
  image: Image;
}

export interface Image {
  path: string;
}

export const useIndustries = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["industries", lang],
    queryFn: () => getIndustries(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
