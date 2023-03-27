import { createClient } from "contentful";

export const apiClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  space: process.env.CONTENTFUL_SPACE_ID || "",
});

export const getEntries = async <T>(contentType: string): Promise<T[]> => {
  const { items } = await apiClient.getEntries<Omit<T, "id">>({
    content_type: contentType,
  });

  return items.map((item) => ({ ...item.fields, id: item.sys.id } as T));
};
