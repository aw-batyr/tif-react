import { getNewsInner } from "@/services/service";
import { useQuery } from "@tanstack/react-query";

export const useNewsInner = (id: number, lang: string) => {
  const { data, isPending } = useQuery({
    queryKey: ["news-inner", id, lang],
    queryFn: () => getNewsInner(id, lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
