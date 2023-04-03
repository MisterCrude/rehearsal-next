import Filters, { ALL_INDEX } from "@/components/Filters";
import StudioCard from "@/components/StudioCard";
import { getDistricts } from "@/contentful-api/district";
import { getServices } from "@/contentful-api/service";
import { getStudios } from "@/contentful-api/studio";
import Primary from "@/layouts/Primary";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { InferGetServerSidePropsType } from "next";
import { useState } from "react";

export default function Home({
  studios,
  districts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [filteredStudios, setFilteredStudios] = useState(studios);

  const handleFilterChange = (selectedDistricts: string[]) => {
    if (selectedDistricts.includes(ALL_INDEX)) {
      return setFilteredStudios(studios);
    }

    const selected = studios.filter(({ district }) =>
      selectedDistricts.includes(district.id)
    );

    return setFilteredStudios(selected);
  };

  return (
    <Primary>
      <Filters districts={districts} onChange={handleFilterChange} />

      {/* Move to separate component */}
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
