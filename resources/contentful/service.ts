import { Service, ServiceDto } from "@/resources/dto/studio";

import { deliveryApiClient } from "./apiClient";

export const getServices = async (): Promise<Service[]> => {
  const { items } = await deliveryApiClient.getEntries<ServiceDto>({
    content_type: "service",
    order: "fields.name",
  });

  const services = items.map((serviceDto) => {
    const name = serviceDto.fields.name;
    const id = serviceDto.sys.id;

    return { id, name };
  });

  return services || [];
};
