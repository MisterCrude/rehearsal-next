import Filters, { ALL_INDEX } from "@/components/Filters";
import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import { getDistricts } from "@/contentful/district";
import { getServices } from "@/contentful/service";
import { getStudios } from "@/contentful/studio";
import Stack from "@mui/material/Stack";
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

  return {
    props: {
      studios,
      services,
      districts,
    },
  };
}
