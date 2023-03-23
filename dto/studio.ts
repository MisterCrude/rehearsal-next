import { ImageField } from "@/types/contentful";
import { Asset, EntryFields } from "contentful";

export interface StudioDto {
  title: string;
  description: EntryFields.RichText;
  address: string;
  link: string;
  email?: string;
  phone?: string;
  image?: Asset;
}

export interface Studio extends Omit<StudioDto, "image"> {
  image: ImageField | null;
}
