"use client";
import { useState } from "react";
import useGetIdeas from "@/hooks/useGetIdeas";
import useVoteIdea from "@/hooks/useVoteIdea";

const useIdeaBoardController = () => {
  const [isVoteError, setIsVoteError] = useState(false);

  const {
    data: ideas,
    isPending,
    isError,
    error,
    refetch,
    isFetching,
  } = useGetIdeas();

  const { mutate: voteIdea } = useVoteIdea();

  const handleVote = async (ideaId: number) => {
    console.log("saiofjsioadfjiosad");
    try {
      voteIdea(ideaId);
    } catch (err: any) {
      setIsVoteError(true);
    }
  };

  const totalVotes = () => {
    if (ideas) {
      return ideas.reduce((sum, idea) => sum + idea.votes, 0);
    }
  };

  const dismissError = () => setIsVoteError(false);

  return {
    isFetching,
    isPending,
    error,
    isError,
    ideas,
    totalVotes,
    dismissError,
    handleVote,
    fetchIdeas: refetch,
    voteIdea,
    isVoteError,
  };
};

export default useIdeaBoardController;
