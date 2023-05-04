import { Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Typography
      variant="h4"
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 6,
        color: "divider",
      }}
    >
      Nie znaleziono!
    </Typography>
  );
}
