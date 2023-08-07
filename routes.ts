/**
 *  Interface of route params to create a route
 *  @param {string} path - Path for the route
 *  @param {string} name - Name of the route
 *  @param {boolean} [hideFromNav] - Hide from header navigation (optional)
 */
interface Route {
  path: string;
  name: string;
  hideFromNav?: boolean;
}

// Pages should be in sync with `pages/*.tsx` files naming
export type Pages = "home" | "about" | "cookie-policy";

// Example how to add new page for pages/new-page.tsx
// { "new-page": { name: "New page", path: "/new-page", hideFromNav: true } }
export const routes: Record<Pages, Route> = {
  "cookie-policy": {
    name: "Polityka plików cookie",
    path: "/cookie-policy",
    hideFromNav: true,
  },
  about: { name: "O nas", path: "/about" },
  home: { name: "Głowna", path: "/", hideFromNav: true },
};
