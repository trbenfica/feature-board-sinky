import { Alert } from "@mui/material";

interface SuccessAlertProps {
  message: string;
}

const SuccessAlert = ({ message }: SuccessAlertProps) => {
  return (
    <Alert
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
      }}
      severity="success"
      variant="filled"
      data-testid="error-alert"
    >
      {message}
    </Alert>
  );
};

export default SuccessAlert;
