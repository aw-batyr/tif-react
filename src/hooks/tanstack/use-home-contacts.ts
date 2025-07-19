import { useQuery } from "@tanstack/react-query";
import { useLangStore } from "@/store/lang";
import { getHomeContacts } from "@/services/service";

export const useHomeContacts = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["home-contacts", lang],
    queryFn: () => getHomeContacts(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
