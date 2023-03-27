import { EntryFields } from "contentful";

export interface PageDto {
  name: string;
  content: EntryFields.RichText;
}
