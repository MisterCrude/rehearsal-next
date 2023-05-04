import { Dispatch, SetStateAction, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { InputAdornment, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { distance as calculateDistance } from "@turf/turf";
import debounce from "lodash/debounce";
import { InferGetServerSidePropsType } from "next";

import Filters from "@/components/Filters";
import { Filter } from "@/components/Filters/types";
import StudioCard from "@/components/StudioCard";
import Primary from "@/layouts/Primary";
import { getDistricts } from "@/resources/contentful/district";
import { getServices } from "@/resources/contentful/service";
import { getStudios } from "@/resources/contentful/studio";
import { Studio } from "@/resources/dto/studio";

// TODO move it to utils file
const filterStudios = (studios: Studio[], queryString: string = "") => {
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

  const handleQueryDebounced = debounce(
    (queryString: string) => filterStudios(filteredStudios, queryString),
    500
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    handleQueryDebounced(event.target.value);
  };

  const handleClearQuery = () => {
    setSearchQuery("");
    filterStudios(filteredStudios);
  };

  const searchedStudios = filterStudios(filteredStudios, searchQuery);

  return (
    <Primary>
      {/* Name and address search bar */}
      <Box sx={{ marginBottom: 4, width: "100%" }}>
        <OutlinedInput
          size="small"
          value={searchQuery}
          onChange={handleQueryChange}
          placeholder="Szukaj po nazwie lub adresie"
          endAdornment={
            searchQuery.length > 0 && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  aria-label="clear search query"
                  onClick={handleClearQuery}
                  edge="end"
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            )
          }
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
            minWidth: {
              xs: "100%",
              sm: 400,
            },
          }}
        />
      </Box>

      <Filters
        districts={districts}
        services={services}
        onChange={handleFilterChange}
      />

      {/* TODO Move to separate component */}
      <Typography
        sx={{
          marginBottom: 2,
          display: "flex",
          color: "gray",
        }}
      >
        {searchedStudios.length} ofert w Warszawie
      </Typography>
      {!searchedStudios.length && (
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
