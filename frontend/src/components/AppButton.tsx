import { Button } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isLoading?: boolean;
  color?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";

  disabled?: boolean;
}

const AppButton = ({
  onClick,
  children,
  isLoading,
  color = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <Button
      sx={{ borderRadius: "8px", fontWeight: 600 }}
      variant="contained"
      color={color}
      onClick={onClick}
      loading={isLoading}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default AppButton;
