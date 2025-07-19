import { useQuery } from "@tanstack/react-query";
import { useLangStore } from "@/store/lang";
import { getContacts } from "@/services/service";

export const useContacts = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["contacts", lang],
    queryFn: () => getContacts(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
