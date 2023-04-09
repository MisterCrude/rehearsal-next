import { Pages, routes } from "@/routes";
import MUIBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";

// TODO: Add support for dynamic routes
// TODO: Add support for nested routes

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export default function Breadcrumbs() {
  const router = useRouter();
  const currentRoute = router.asPath
    .split("/")
    .filter((item) => !!item)[0] as Pages;

  const breadcrumbs: BreadcrumbItem[] = [
    // Add home page breadcrumb
    { name: routes.home.name, path: routes.home.path },
    // Add current page breadcrumb
    { name: routes[currentRoute].name, path: routes[currentRoute].path },
  ];

  const isCurrentRoute = (route: string) => {
    console.log(route, currentRoute);
    return route === `/${currentRoute}`;
  };

  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map(({ path, name }) => (
        <Link
          component={isCurrentRoute(path) ? "span" : "a"}
          key={path}
          color="inherit"
          href={isCurrentRoute(path) ? undefined : path}
          onClick={(event) => {
            event.preventDefault();
            // navigate to target page in client side
            router.push(path);
          }}
          sx={{
            textDecoration: isCurrentRoute(path) ? "none" : "underline",
          }}
        >
          {name}
        </Link>
      ))}
    </MUIBreadcrumbs>
  );
}
