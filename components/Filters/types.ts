export enum FilterNames {
  District = "district",
  Service = "service",
}

export type Filter = {
  [key in FilterNames]: string[];
};
