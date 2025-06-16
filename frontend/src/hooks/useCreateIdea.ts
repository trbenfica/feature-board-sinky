import { createIdea } from "@/services/ideas.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IUseCreateIdea {
  afterPress?: () => void;
}

const useCreateIdea = ({ afterPress }: IUseCreateIdea) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (title: string) => createIdea(title),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ideas"] });
      if (afterPress) {
        afterPress();
      }
    },
  });

  return {
    ...mutation,
  };
};

export default useCreateIdea;
