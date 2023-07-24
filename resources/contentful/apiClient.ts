import { createClient as deliveryCreateClient } from "contentful";
import { createClient as managementCreateClient } from "contentful-management";

export const deliveryApiClient = deliveryCreateClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  space: process.env.CONTENTFUL_SPACE_ID || "",
});

export const managementApiClient = managementCreateClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});
