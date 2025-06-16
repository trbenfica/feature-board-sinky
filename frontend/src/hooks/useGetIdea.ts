import { getIdea } from "@/services/ideas.service";
import { useQuery } from "@tanstack/react-query";
import { Idea } from "../types/idea";

const useGetIdea = (id: Idea["id"]) => {
  return useQuery({
    queryKey: ["idea", id],
    queryFn: () => getIdea(id),
    enabled: !!id,
  });
};

export default useGetIdea;
