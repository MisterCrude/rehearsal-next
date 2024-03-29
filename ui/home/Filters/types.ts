export enum FilterNames {
  District = "district",
  Service = "service",
  Location = "location",
}

export type Filter = {
  [FilterNames.District]: string[];
  [FilterNames.Service]: string[];
  [FilterNames.Location]: number[] | null;
};
