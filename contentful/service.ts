import { Service, ServiceDto } from "@/dto/studio";
import apiClient from "./apiClient";

export const getServices = async (): Promise<Service[]> => {
  const { items } = await apiClient.getEntries<ServiceDto>({
    content_type: "service",
  });

  const services = items.map((serviceDto) => {
    const name = serviceDto.fields.name;
    const id = serviceDto.sys.id;

    return { id, name };
  });

  return services || [];
};
