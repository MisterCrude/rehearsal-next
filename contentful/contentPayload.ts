import { PageDto } from "@/dto/page";
import apiClient from "./apiClient";

export const getContentPayload = async (pageName: string): Promise<PageDto> => {
  const { items } = await apiClient.getEntries<PageDto>({
    content_type: "contentPayload",
    limit: 1,
    "fields.payloadId": pageName,
  });

  return items[0].fields;
};
