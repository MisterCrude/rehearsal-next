import { routes } from "@/routes";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <Stack spacing={2} direction="row">
      {Object.values(routes).map(({ name, path }) => (
        <MuiLink
          color="inherit"
          key={path}
          component={Link}
          href={path}
          sx={{
            textDecoration: path === router.pathname ? "underline" : "unset",
          }}
        >
          {name}
        </MuiLink>
      ))}
    </Stack>
  );
}
