import { Service, ServiceDto } from "@/api/dto/studio";
import { Entry } from "contentful";

export const dtoToServices = (entries: Entry<ServiceDto>[]): Service[] =>
  entries.map((entry) => ({ id: entry.sys.id, name: entry.fields.name }));
