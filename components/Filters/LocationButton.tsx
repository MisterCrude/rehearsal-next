import TimelineIcon from "@mui/icons-material/Timeline";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface LocationButtonProps {
  isActive?: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

export default function LocationButton({
  isActive,
  isLoading,
  onClick,
}: LocationButtonProps) {
  const startIcon = isLoading ? (
    <CircularProgress color="inherit" size={20} />
  ) : (
    <TimelineIcon />
  );

  return (
    <Button
      disabled={isLoading}
      variant={isActive ? "contained" : "outlined"}
      startIcon={startIcon}
      onClick={onClick}
      sx={{
        borderRadius: 6,
        textTransform: "none",
        display: "flex",
        flexShrink: 0,
      }}
    >
      Najblizsze od Ciebie
    </Button>
  );
}
