import { Asset, Entry, EntryFields } from "contentful";

import { ImageField } from "@/types/contentful";

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
  address: string;
  location: EntryFields.Location;
  district: Entry<DistrictDto>;
  link: string;
  title: string;
  services: Entry<ServiceDto>[];
  description?: EntryFields.RichText;
  email?: string;
  image?: Asset;
  phone?: string;
}

export interface Studio
  extends Omit<StudioDto, "district" | "services" | "image"> {
  id: string;
  district: District;
  services: Service[];
  image?: ImageField;
  distance?: number;
  endLocation?: number[];
}
