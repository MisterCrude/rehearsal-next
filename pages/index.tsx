import Filters from "@/components/Filters";
import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import { getDistricts } from "@/contentful/district";
import { getServices } from "@/contentful/service";
import { getStudios } from "@/contentful/studio";
import Stack from "@mui/material/Stack";
import { InferGetServerSidePropsType } from "next";

export default function Home({
  studios,
  districts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <Filters districts={districts} onChange={console.log} />
      <Stack gap={4}>
        {studios.map((studio) => (
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
