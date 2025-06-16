import { useEffect, useState } from "react";
import { Backdrop, Box, TextField, Typography } from "@mui/material";
import AppButton from "./AppButton";
import useCreateIdea from "@/hooks/useCreateIdea";
import ErrorAlert from "./ErrorAlert";
import SuccessAlert from "./SuccessAlert";

interface ICreateNewIdeaProps {
  handleClose: () => void;
}

const CreateNewIdea = ({ handleClose }: ICreateNewIdeaProps) => {
  const [idea, setIdea] = useState("");

  const { mutate, isPending, isError, error } = useCreateIdea({
    afterPress: () => handleClose(),
  });

  const handleSubmitIdea = () => {
    if (idea) {
      mutate(idea);
      handleClose();
    }
  };

  const handleClearText = () => {
    setIdea("");
  };

  if (isError) {
    return (
      <ErrorAlert message={`Error: unable to create idea: ${error.message}`} />
    );
  }

  return (
    <Backdrop
      sx={(theme) => ({
        color: "#fff",
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={true}
    >
      <Box
        data-testid="filtro-form"
        display="flex"
        flexDirection="column"
        gap={2}
        sx={{
          backgroundColor: "white",
          padding: "40px",
          color: "black",
          borderRadius: 8,
          width: "40%",
          minWidth: "600px",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Create new idea</Typography>

        <TextField
          label="Idea"
          variant="outlined"
          size="small"
          onChange={(e) => setIdea(e.target.value)}
          sx={{ width: "100%" }}
          value={idea}
        />

        <div className="flex gap-x-2 mt-2">
          <AppButton
            color="success"
            onClick={handleSubmitIdea}
            isLoading={isPending}
          >
            Create idea
          </AppButton>

          <AppButton color="error" onClick={handleClearText}>
            Clear
          </AppButton>

          <AppButton color="info" onClick={handleClose}>
            Cancel
          </AppButton>
        </div>
      </Box>
    </Backdrop>
  );
};

export default CreateNewIdea;
