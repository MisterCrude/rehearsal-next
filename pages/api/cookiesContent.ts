import { ContentPayloadDto } from "@/dto/contentPayload";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentPayloadDto>
) {
  res.status(200);
}
