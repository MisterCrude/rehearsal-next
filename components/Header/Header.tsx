import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Toolbar component={Container} sx={{ justifyContent: "space-between" }}>
        <Logo />
        <Navigation />
      </Toolbar>
    </Box>
  );
}
