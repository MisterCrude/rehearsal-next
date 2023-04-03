import { createClient } from "contentful";

export const contentfulApiClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  space: process.env.CONTENTFUL_SPACE_ID || "",
});

export default contentfulApiClient;
