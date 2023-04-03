import { getContentPayload } from "@/api/contentful/content-payload";
import { ContentPayloadDto } from "@/api/dto/content-payload";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentPayloadDto>
) {
  const { query } = req;
  const payload = await getContentPayload(query.id as string);

  res.json(payload);
}
