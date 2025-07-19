import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "@/services/service";

export const usePhotos = (id: number) => {
  const { data, isPending, status } = useQuery({
    queryKey: ["photos", id],
    queryFn: () => getPhotos(id),
    select: ({ data }) => data.data,
  });

  return { data, isPending, status };
};
