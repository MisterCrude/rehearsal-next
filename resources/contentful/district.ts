import { District, DistrictDto } from "@/resources/dto/studio";

import { deliveryApiClient } from "./apiClient";

export const getDistricts = async (): Promise<District[]> => {
  const { items } = await deliveryApiClient.getEntries<DistrictDto>({
    content_type: "district",
    order: "fields.name",
  });

  const districts = items.map((districtDto) => {
    const name = districtDto.fields.name;
    const id = districtDto.sys.id;

    return { id, name };
  });

  return districts || [];
};
