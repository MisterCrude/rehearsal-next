import { District, DistrictDto } from "@/api/dto/studio";
import contentfulApiClient from "./apiClient";

export const getDistricts = async (): Promise<District[]> => {
  const { items } = await contentfulApiClient.getEntries<DistrictDto>({
    content_type: "district",
  });

  const districts = items.map((districtDto) => {
    const name = districtDto.fields.name;
    const id = districtDto.sys.id;

    return { id, name };
  });

  return districts || [];
};
