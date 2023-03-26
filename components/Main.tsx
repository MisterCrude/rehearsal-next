import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
  return (
    <Container
      component="main"
      sx={{
        mt: 8,
        mb: 2,
        flexGrow: 1,
      }}
    >
      {children}
    </Container>
  );
}
