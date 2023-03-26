import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Logo() {
  return (
    <Badge color="secondary" badgeContent="beta">
      <Typography variant="h5" component="div" color="inherit" sx={{ mr: 2 }}>
        Proba.pl
      </Typography>
    </Badge>
  );
}

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar component={Container} sx={{ justifyContent: "space-between" }}>
        <Logo />
        <Box>
          {/* 
            Side menu example:
            <Button color="inherit">Login</Button> 
          */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
