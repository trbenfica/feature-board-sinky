"use client";

import { useState } from "react";

import type { Idea } from "@/types/idea";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import AppButton from "./AppButton";
import { ThumbUp } from "@mui/icons-material";

interface IdeaCardProps {
  idea: Idea;
  onVote: (ideaId: number) => void; // Changed from string to number
  hasVoted: boolean;
}

export function IdeaCard({ idea, onVote, hasVoted }: IdeaCardProps) {
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = async () => {
    if (hasVoted) return;

    setIsVoting(true);
    await onVote(idea.id);
    setIsVoting(false);
  };

  return (
    <Card className="h-full w-60 flex flex-col transition-all duration-200 hover:shadow-lg ">
      <CardContent>
        <Typography variant="h5" component="div">
          {idea.title}
        </Typography>
      </CardContent>
      <CardActions>
        <AppButton onClick={handleVote} disabled={hasVoted || isVoting}>
          <ThumbUp className="mr-2" />
          {isVoting
            ? "Voting..."
            : `${idea.votes} ${idea.votes === 1 ? "Vote" : "Votes"}`}
        </AppButton>
      </CardActions>
    </Card>
  );
}
