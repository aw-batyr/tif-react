import { getParticipants } from "@/services/service";
import { useLangStore } from "@/store/lang";
import { useQuery } from "@tanstack/react-query";

export const useParticipants = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useQuery({
    queryKey: ["participants", lang],
    queryFn: () => getParticipants(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
