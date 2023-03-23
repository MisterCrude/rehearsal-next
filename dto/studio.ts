import { RichTextField, ImageField } from "@/types/contentful";
import { EntryFields, Asset } from "contentful";

export interface StudioDto {
  title: string;
  description: EntryFields.RichText;
  address: string;
  link: string;
  email?: string;
  phone?: string;
  image?: Asset;
}

export interface Studio extends Omit<StudioDto, "description" | "image"> {
  description: RichTextField | null;
  image: ImageField | null;
}
