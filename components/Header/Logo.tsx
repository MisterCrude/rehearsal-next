import { BRAND_NAME } from "@/utils/constants";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Logo() {
  return (
    <Badge color="secondary" badgeContent="beta">
      <Typography
        color="inherit"
        component={Link}
        href="/"
        sx={{ mr: 2, textDecoration: "none" }}
        variant="h5"
      >
        {BRAND_NAME}
      </Typography>
    </Badge>
  );
}
