import { createClient } from "contentful";

export const apiClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  space: process.env.CONTENTFUL_SPACE_ID || "",
});

export default apiClient;
