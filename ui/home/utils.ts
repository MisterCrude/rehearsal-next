import { Studio } from "@/resources/dto/studio";

export const filterStudios = (studios: Studio[], queryString: string = "") => {
  if (!queryString || queryString.length < 3) {
    return studios;
  }

  const filteredStudios = studios.filter(({ title, address }) => {
    const hasInTitle = title.toLowerCase().includes(queryString.toLowerCase());
    const hasInAddress = address
      .toLowerCase()
      .includes(queryString.toLowerCase());

    return hasInTitle || hasInAddress;
  });

  return filteredStudios;
};
