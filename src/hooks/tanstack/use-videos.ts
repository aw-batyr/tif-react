import { useQuery } from "@tanstack/react-query";
import { getVideos } from "@/services/service";

export const useVideos = (id: number) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => getVideos(id),
    select: ({ data }) => data.data,
  });

  return { data, isPending, isError };
};
