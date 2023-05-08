import Stack from "@mui/material/Stack";
import { distance as calculateDistance } from "@turf/turf";
import { InferGetServerSidePropsType } from "next";
import { useState } from "react";

import StudioCard from "@/components/StudioCard";
import Primary from "@/layouts/Primary";
import { getDistricts } from "@/resources/contentful/district";
import { getServices } from "@/resources/contentful/service";
import { getStudios } from "@/resources/contentful/studio";
import Filters from "@/ui/home/Filters";
import { Filter } from "@/ui/home/Filters/types";
import NotFound from "@/ui/home/NotFound";
import OffersAmount from "@/ui/home/OffersAmount";
import SearchField from "@/ui/home/SearchField";
import { filterStudios } from "@/ui/home/utils";
export default function Home({
  studios,
  districts,
  services,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [filteredStudios, setFilteredStudios] = useState(studios);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filter: Partial<Filter>) => {
    let selected = studios;

    // Filter by district
    if (filter.district?.length) {
      selected = selected.filter(({ district }) =>
        filter.district?.includes(district.id)
      );
    }

    // FIlter by service
    if (filter.service?.length) {
      selected = selected.filter(({ services }) =>
        services.some(({ id }) => filter.service?.includes(id))
      );
    }

    // Filter by location
    if (filter.location) {
      selected = selected.map((studio) => {
        // TODO calculate real distance using Distance API from Mapbox
        // https://docs.mapbox.com/help/tutorials/route-finder-with-turf-mapbox-directions/
        const distance = calculateDistance(
          [filter.location![1], filter.location![0]],
          [studio.location.lat, studio.location.lon],
          { units: "kilometers" }
        );

        return {
          ...studio,
          distance: Math.round(distance) + 2,
        };
      });

      selected = selected.sort((a, b) => {
        return a.distance! - b.distance!;
      });
    }

    return setFilteredStudios(selected);
  };

  const handleQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const searchedStudios = filterStudios(filteredStudios, searchQuery);

  return (
    <Primary>
      <SearchField onChange={handleQueryChange} />

      <Filters
        districts={districts}
        services={services}
        onChange={handleFilterChange}
      />

      <OffersAmount amount={searchedStudios.length} />

      {!searchedStudios.length && <NotFound />}

      <Stack gap={4}>
        {searchedStudios.map((studio) => (
          <StudioCard key={studio.id} studio={studio} />
        ))}
      </Stack>
    </Primary>
  );
}

export async function getServerSideProps() {
  const studios = await getStudios();
  const services = await getServices();
  const districts = await getDistricts();

  return {
    props: {
      studios,
      services,
      districts,
    },
  };
}
