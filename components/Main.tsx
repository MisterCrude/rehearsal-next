import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
  return (
    <Container
      component="main"
      sx={{
        marginY: 4,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Container>
  );
}
