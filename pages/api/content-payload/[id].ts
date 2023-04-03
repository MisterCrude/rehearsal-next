import { ContentPayloadDto } from "@/api/content-payload";
import { getContentPayload } from "@/contentful-api/contentPayload";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentPayloadDto>
) {
  const { query } = req;
  const payload = await getContentPayload(query.id as string);

  res.json(payload);
}
