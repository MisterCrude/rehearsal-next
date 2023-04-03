import { EntryFields } from "contentful";

export interface ContentPayloadDto {
  name: string;
  payloadId: string;
  content: EntryFields.RichText;
}
