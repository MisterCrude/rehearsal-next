import { Asset } from "contentful";

import { ImageField } from "@/types/contentful";

export const dtoToImage = (image: Asset): ImageField => ({
  id: image.sys.id,
  description: image.fields.description,
  title: image.fields.title,
  url: `https:${image.fields.file.url}`,
  width: image.fields.file.details.image?.width,
  height: image.fields.file.details.image?.height,
});
