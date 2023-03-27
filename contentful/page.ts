import { PageDto } from "@/dto/page";
import apiClient from "./apiClient";

export const getPage = async (pageName: string): Promise<PageDto> => {
  const { items } = await apiClient.getEntries<PageDto>({
    content_type: "page",
    limit: 1,
    "fields.name": pageName,
  });

  return items[0].fields;
};
