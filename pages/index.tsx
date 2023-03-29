import Filters, { ALL_INDEX } from "@/components/Filters";
import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import { getDistricts } from "@/contentful/district";
import { getServices } from "@/contentful/service";
import { getStudios } from "@/contentful/studio";
import Box from "@mui/material/Box";
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
    <Layout>
      <Filters districts={districts} onChange={handleFilterChange} />

      {/* Move to separate component */}
      <Box
        sx={{ marginBottom: 2, justifyContent: "flex-end", display: "flex" }}
      >
        Pokazano {filteredStudios.length} z {studios.length}
      </Box>

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
    </Layout>
  );
}

export async function getServerSideProps() {
  const studios = await getStudios();
  const services = await getServices();
  const districts = await getDistricts();

  console.log(studios);

  return {
    props: {
      studios,
      services,
      districts,
    },
  };
}
