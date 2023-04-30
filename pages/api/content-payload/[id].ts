import type { NextApiRequest, NextApiResponse } from "next";

import { getContentPayload } from "@/resources/contentful/content-payload";
import { ContentPayloadDto } from "@/resources/dto/content-payload";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentPayloadDto>
) {
  const { query } = req;
  const payload = await getContentPayload(query.id as string);

  res.json(payload);
}
