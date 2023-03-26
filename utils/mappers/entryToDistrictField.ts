import { District } from "@/dto/studio";
import { Entry } from "contentful";

export const entryToDistrictField = (entry: Entry<District>): District => ({
  id: entry.sys.id,
  name: entry.fields.name,
});
