import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

import { routes } from "@/routes";

export default function Navigation() {
  const router = useRouter();

  return (
    <Stack spacing={2} direction="row">
      {Object.values(routes).map(({ name, path, hideFromNav }) => (
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
    </Stack>
  );
}
