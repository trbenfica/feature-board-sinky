"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Loading from "@/components/Loading";
import ErrorAlert from "@/components/ErrorAlert";
import AppButton from "@/components/AppButton";
import useIdeaBoardController from "@/controller/useIdeaBoardController";
import { IdeaCard } from "@/components/IdeaCard";
import { Lightbulb } from "@mui/icons-material";
import CreateNewIdea from "@/components/CreateNewIdea";

export const Index = () => {
  const {
    isPending,
    isError,
    error,
    isFetching,
    ideas,
    handleVote,
    fetchIdeas: refetch,
  } = useIdeaBoardController();

  const [createIdea, setCreateIdea] = useState(false);

  if (isPending) {
    return <Loading />;
  }

  if (isError || !ideas) {
    return <ErrorAlert message={error!.message} />;
  }

  return (
    <div className="bg-white w-screen min-h-screen">
      {createIdea && <CreateNewIdea handleClose={() => setCreateIdea(false)} />}
      <div className="flex flex-col gap-y-4 items-center px-4">
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="my-5 text-5xl font-black text-black">Idea Board</h1>
        </motion.div>
      </div>

      <div className="w-full flex flex-col gap-y-6 justify-center items-center">
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex gap-x-4"
        >
          <AppButton color="warning" isLoading={isFetching} onClick={refetch}>
            Refresh
          </AppButton>
          <AppButton
            color="success"
            isLoading={isFetching}
            onClick={() => setCreateIdea(true)}
          >
            Create new idea
          </AppButton>
        </motion.div>

        <div className="w-full min-h-[400px] h-full mb-10">
          {!isPending && (
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="w-full  flex flex-col gap-y-6 justify-center items-center"
            >
              {ideas.length > 0 ? (
                <div className="flex flex-row-reverse flex-wrap gap-6 w-[80%]">
                  {ideas.map((idea) => (
                    <IdeaCard
                      key={idea.id}
                      idea={idea}
                      onVote={handleVote}
                      hasVoted={false}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 ">
                  <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 ">
                    No ideas found
                  </h3>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
