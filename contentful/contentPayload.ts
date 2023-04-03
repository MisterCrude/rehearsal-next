import { ContentPayloadDto } from "@/dto/contentPayload";
import apiClient from "./apiClient";

export const getContentPayload = async (
  pageName: string
): Promise<ContentPayloadDto> => {
  const { items } = await apiClient.getEntries<ContentPayloadDto>({
    content_type: "contentPayload",
    limit: 1,
    "fields.payloadId": pageName,
  });

  return items[0].fields;
};
