import Button from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { Fragment } from "react";

import { routes } from "@/routes";

import UserAvatar from "./UserAvatar";

const ROUTES = Object.values(routes);

export default function Navigation() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSighIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
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

      {session?.user ? (
        <UserAvatar
          onSignOut={handleSignOut}
          username={session?.user.name || ""}
          avatar={session?.user.image || ""}
        />
      ) : (
        <Button
          variant="contained"
          onClick={handleSighIn}
          sx={{ textTransform: "none" }}
        >
          Załoguj się
        </Button>
      )}
    </Stack>
  );
}
