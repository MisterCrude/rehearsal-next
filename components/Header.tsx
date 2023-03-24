import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Badge
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                right: 10,
                bottom: 15,
                left: "unset",
                top: "unset",
              },
            }}
            badgeContent="beta"
          >
            <Typography
              variant="h5"
              component="div"
              color="inherit"
              sx={{ mr: 2 }}
            >
              Proba.pl
            </Typography>
          </Badge>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
