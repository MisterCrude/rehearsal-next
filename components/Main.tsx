import { PropsWithChildren } from "react";

import Container from "@mui/material/Container";

export default function Main({ children }: PropsWithChildren) {
  return (
    <Container
      component="main"
      sx={{
        marginY: 4,
        flexGrow: 1,
      }}
    >
      {children}
    </Container>
  );
}
