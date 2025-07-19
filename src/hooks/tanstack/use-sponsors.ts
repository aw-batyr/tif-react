import { useQuery } from "@tanstack/react-query";
import { useLangStore } from "@/store/lang";
import { getSponsors } from "@/services/service";

export const useSponsors = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["sponsors", lang],
    queryFn: () => getSponsors(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
