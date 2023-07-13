import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Breadcrumbs from "@/components/Breadcrumbs";
import Primary from "@/layouts/Primary";

export default function Login() {
  return (
    <Primary>
      <Breadcrumbs />

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingY: 6,
        }}
      >
        <Stack
          gap={4}
          sx={{
            mWidth: "100%",
            width: {
              xs: 1,
              sm: 1 / 2,
            },
          }}
        >
          <Typography variant="h5" align="center">
            Login
          </Typography>
          <TextField label="Email" />
          <TextField label="Hasło" type="password" />
        </Stack>
      </Box>
    </Primary>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
