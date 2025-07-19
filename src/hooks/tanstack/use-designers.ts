import { getDesigners } from "@/services/service";
import { useLangStore } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";

export const useDesigners = (id: number) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["designers", lang],
    queryFn: () => getDesigners(lang, id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
