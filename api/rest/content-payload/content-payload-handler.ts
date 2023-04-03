import { ContentPayloadDto } from "@/api/dto/content-payload";
import { useQuery } from "react-query";
import apiPaths from "../apiPaths";

const getContentPayload = async (
  payloadId: string
): Promise<ContentPayloadDto> => {
  try {
    const response = await fetch(`${apiPaths.contentPayload}/${payloadId}`);

    if (!response.ok) {
      throw Error(
        `Network response not was Ok, for path "${apiPaths.contentPayload}"!`
      );
    }

    const contentPayload = await response.json();

    return contentPayload;
  } catch (error) {
    console.error(error);
    throw Error(`Network error, for path "${apiPaths.contentPayload}"!`);
  }
};

export const useGetContentPayload = (payloadId: string) => {
  return useQuery<ContentPayloadDto, void>("content-payload", () =>
    getContentPayload(payloadId)
  );
};
