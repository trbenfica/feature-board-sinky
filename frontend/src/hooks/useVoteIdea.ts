import { voteIdea } from "@/services/ideas.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Idea } from "..//types/idea";

const useVoteIdea = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: Idea["id"]) => voteIdea(id),
    onSuccess: () => {
      console.log(
        "DOFHASIOFNSDAOFNSIODANFOSIADNFDIODSANFIODSANFIOSNAFIONSADOFNSIODANFSIDANF"
      );
      queryClient.refetchQueries({ queryKey: ["ideas"] });
    },
  });

  return {
    ...mutation,
  };
};

export default useVoteIdea;
