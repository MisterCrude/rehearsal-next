import { District, DistrictDto } from "@/api/rest/studio";
import { Entry } from "contentful";

export const dtoToDistrict = (entry: Entry<DistrictDto>): District => ({
  id: entry.sys.id,
  name: entry.fields.name,
});
