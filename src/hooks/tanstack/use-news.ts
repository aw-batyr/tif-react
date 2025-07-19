import { getNews } from "@/services/service";
import { useQuery } from "@tanstack/react-query";

export const useNews = (lang: "ru" | "en") => {
  const { data, isPending } = useQuery({
    queryKey: ["news", lang],
    queryFn: () => getNews(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
