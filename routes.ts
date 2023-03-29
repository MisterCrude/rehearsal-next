interface Route {
  path: string;
  name: string;
  hidden?: boolean; // Hide from header navigation
}

type Pages = "home" | "about";

export const routes: Record<Pages, Route> = {
  home: { name: "Głowna", path: "/", hidden: true },
  about: { name: "O nas", path: "/about" },
};
