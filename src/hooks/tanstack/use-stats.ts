import { getStats } from "@/services/service";
import { useLangStore } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";

export interface StatsType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  title: string;
  text: string;
  created_at: string;
  updated_at: string;
}

export const useStats = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["stats", lang],
    queryFn: () => getStats(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
