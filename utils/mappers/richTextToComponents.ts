import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { EntryFields } from "contentful";

export const richTextToComponents = (richText: EntryFields.RichText): any => {
  return documentToReactComponents(richText as Document);
};
