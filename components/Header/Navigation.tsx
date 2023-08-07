import Button from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Fragment, MouseEvent } from "react";

import { routes } from "@/routes";

const SIGN_IN_PATH = "/api/auth/signin";
const ROUTES = Object.values(routes);

export default function Navigation() {
  const router = useRouter();

  const handleSighIn = (event: MouseEvent<HTMLButtonElement>) => {
    signIn();
  };

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      {ROUTES.map(({ name, path, hideFromNav }) => (
        <Fragment key={path}>
          {!hideFromNav && (
            <MuiLink
              color="inherit"
              component={Link}
              href={path}
              sx={{
                textDecoration: router.pathname.includes(path)
                  ? "underline"
                  : "unset",
              }}
            >
              {name}
            </MuiLink>
          )}
        </Fragment>
      ))}
      <Button
        variant="contained"
        onClick={handleSighIn}
        sx={{ textTransform: "none" }}
      >
        Załoguj się
      </Button>
    </Stack>
  );
}
