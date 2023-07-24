import { ContentPayloadDto } from "@/resources/dto/content-payload";

import { deliveryApiClient } from "./apiClient";

export const getContentPayload = async (
  pageName: string
): Promise<ContentPayloadDto> => {
  const { items } = await deliveryApiClient.getEntries<ContentPayloadDto>({
    content_type: "contentPayload",
    limit: 1,
    "fields.payloadId": pageName,
  });

  return items[0].fields;
};
