import { ContentPayloadDto } from "@/api/rest/content-payload";
import contentfulApiClient from "./contentfulApiClient";

export const getContentPayload = async (
  pageName: string
): Promise<ContentPayloadDto> => {
  const { items } = await contentfulApiClient.getEntries<ContentPayloadDto>({
    content_type: "contentPayload",
    limit: 1,
    "fields.payloadId": pageName,
  });

  return items[0].fields;
};
