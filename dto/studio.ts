import { ImageField } from "@/types/contentful";
import { Asset, Entry, EntryFields } from "contentful";

export interface StudioDto {
  id: string;
  address: string;
  district: Entry<District>;
  link: string;
  title: string;
  description?: EntryFields.RichText;
  email?: string;
  image?: Asset;
  phone?: string;
}

export interface District {
  id: string;
  name: string;
}
export interface Studio {
  id: string;
  address: string;
  district: District;
  link: string;
  title: string;
  description?: EntryFields.RichText;
  email?: string;
  image?: ImageField;
  phone?: string;
}
