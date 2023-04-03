import { Service, ServiceDto } from "@/api/studio";
import contentfulApiClient from "./contentfulApiClient";

export const getServices = async (): Promise<Service[]> => {
  const { items } = await contentfulApiClient.getEntries<ServiceDto>({
    content_type: "service",
  });

  const services = items.map((serviceDto) => {
    const name = serviceDto.fields.name;
    const id = serviceDto.sys.id;

    return { id, name };
  });

  return services || [];
};
