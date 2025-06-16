import { Alert } from "@mui/material";

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <Alert
      sx={{
        position: "absolute",
        top: "85%",
        left: "12%",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
      }}
      severity="error"
      variant="filled"
      data-testid="error-alert"
    >
      {message}
    </Alert>
  );
};

export default ErrorAlert;
