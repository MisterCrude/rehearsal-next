import { Studio, StudioDto } from "@/resources/dto/studio";
import { dtoToDistrict } from "@/utils/mappers/dto-to-district";
import { dtoToImage } from "@/utils/mappers/dto-to-image";
import { dtoToServices } from "@/utils/mappers/dto-to-services";
import apiClient from "./apiClient";

export const getStudios = async (): Promise<Studio[]> => {
  const { items } = await apiClient.getEntries<StudioDto>({
    content_type: "studio",
    order: "fields.title",
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
