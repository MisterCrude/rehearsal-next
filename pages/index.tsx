import { useState } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { distance as calculateDistance } from "@turf/turf";
import { InferGetServerSidePropsType } from "next";

import Filters from "@/components/Filters";
import LocationButton from "@/components/Filters/LocationButton";
import { Filter } from "@/components/Filters/types";
import StudioCard from "@/components/StudioCard";
import Primary from "@/layouts/Primary";
import { getDistricts } from "@/resources/contentful/district";
import { getServices } from "@/resources/contentful/service";
import { getStudios } from "@/resources/contentful/studio";

export default function Home({
  studios,
  districts,
  services,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [filteredStudios, setFilteredStudios] = useState(studios);

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
        const distance = calculateDistance(
          [filter.location![1], filter.location![0]],
          [studio.location.lat, studio.location.lon],
          { units: "kilometers" }
        );
        return {
          ...studio,
          distance: Number(distance.toFixed(2)),
        };
      });

      selected = selected.sort((a, b) => {
        return a.distance! - b.distance!;
      });
    }

    return setFilteredStudios(selected);
  };

  return (
    <Primary>
      <Filters
        districts={districts}
        services={services}
        onChange={handleFilterChange}
      />

      <LocationButton onChange={handleFilterChange} />

      {/* TODO Move to separate component */}
      <Typography
        sx={{
          marginBottom: 2,
          justifyContent: "flex-end",
          display: "flex",
          color: "gray",
        }}
      >
        {filteredStudios.length} ofert
      </Typography>
      {!filteredStudios.length && (
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
            color: "divider",
          }}
        >
          Nie znaleziono!
        </Typography>
      )}

      <Stack gap={4}>
        {filteredStudios.map((studio) => (
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
