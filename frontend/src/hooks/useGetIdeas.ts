import { getIdeas } from "@/services/ideas.service";
import { useQuery } from "@tanstack/react-query";

const useGetIdeas = () => {
  const query = useQuery({
    queryKey: ["ideas"],
    queryFn: getIdeas,
  });

  return {
    ...query,
  };
};

export default useGetIdeas;
