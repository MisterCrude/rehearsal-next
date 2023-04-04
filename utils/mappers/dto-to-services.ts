import { Service, ServiceDto } from "@/resources/dto/studio";
import { Entry } from "contentful";

export const dtoToServices = (entries: Entry<ServiceDto>[]): Service[] =>
  entries.map((entry) => ({ id: entry.sys.id, name: entry.fields.name }));
