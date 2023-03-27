import { ImageField } from "@/types/contentful";
import { Asset, Entry, EntryFields } from "contentful";

export interface DistrictDto {
  name: string;
}

export interface District extends DistrictDto {
  id: string;
}

export interface ServiceDto {
  name: string;
}

export interface Service extends ServiceDto {
  id: string;
}

export interface StudioDto {
  id: string;
  address: string;
  district: Entry<DistrictDto>;
  link: string;
  title: string;
  description?: EntryFields.RichText;
  email?: string;
  image?: Asset;
  phone?: string;
  services?: Entry<ServiceDto>[];
}

export interface Studio
  extends Omit<StudioDto, "district" | "services" | "image"> {
  district: District;
  services?: Service[];
  image?: ImageField;
}
