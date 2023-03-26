import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box sx={{ minHeight: "100vh", flexDirection: "column", display: "flex" }}>
      <Header />
      <Main>{children}</Main>
      <Footer description="Proba portal" title="proba.pl" />
    </Box>
  );
}
