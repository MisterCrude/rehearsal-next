interface Route {
  path: string;
  name: string;
  hidden?: boolean; // Hide from header navigation
}

// Pages should be in sync with `pages/*.tsx` files naming
export type Pages = "home" | "about" | "cookie-policy";

// Examole how to add new page for pages/new-page.tsx
// { "new-page": { name: "New page", path: "/new-page", hidden: true } }
export const routes: Record<Pages, Route> = {
  "cookie-policy": {
    name: "Polityka plików cookie",
    path: "/cookie-policy",
    hidden: true,
  },
  about: { name: "O nas", path: "/about" },
  home: { name: "Głowna", path: "/", hidden: true },
};
