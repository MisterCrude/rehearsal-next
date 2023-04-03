import { Studio, StudioDto } from "@/dto/studio";
import { dtoToDistrict } from "@/utils/mappers/dtoToDistrict";
import { dtoToImage } from "@/utils/mappers/dtoToImage";
import { dtoToServices } from "@/utils/mappers/dtoToServices";
import contentfulApiClient from "./contentfulApiClient";

export const getStudios = async (): Promise<Studio[]> => {
  const { items } = await contentfulApiClient.getEntries<StudioDto>({
    content_type: "studio",
  });

  const studios = items.map((studioDto) => {
    const image = studioDto.fields.image && dtoToImage(studioDto.fields.image);
    const services =
      studioDto.fields.services && dtoToServices(studioDto.fields.services);
    const district = dtoToDistrict(studioDto.fields.district);
    const id = studioDto.sys.id;

    return { ...studioDto.fields, id, image, district, services };
  });

  return studios;
};
