interface Route {
  path: string;
  name: string;
}

type Pages = "home" | "about";

export const routes: Record<Pages, Route> = {
  home: { name: "Salki", path: "/" },
  about: { name: "O nas", path: "/about" },
};
