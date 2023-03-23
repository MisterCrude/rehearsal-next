import { ImageField } from "@/types/contentful";
import { Asset } from "contentful";

export const mapDtoToImage = (image: Asset): ImageField => {
  return {
    id: image.sys.id,
    description: image.fields.description,
    title: image.fields.title,
    url: image.fields.file.url,
  };
};
