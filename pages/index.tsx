import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import { StudioDto } from "@/dto/studio";
import { getEntries } from "@/utils/contentful";
import { dtoToDistrict } from "@/utils/mappers/dtoToDistrict";
import { dtoToImage } from "@/utils/mappers/dtoToImage";
import { dtoToServices } from "@/utils/mappers/dtoToServices";
import Stack from "@mui/material/Stack";
import { InferGetServerSidePropsType } from "next";

export default function Home({
  studios,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <Stack gap={4}>
        {studios.map((studio) => (
          <StudioCard key={studio.id} studio={studio} />
        ))}
      </Stack>
    </Layout>
  );
}

export async function getServerSideProps() {
  const entries = await getEntries<StudioDto>("studio");

  const studios = entries.map((studioDto) => {
    const image = studioDto.image && dtoToImage(studioDto.image);
    const services = studioDto.services && dtoToServices(studioDto.services);
    const district = dtoToDistrict(studioDto.district);

    return { ...studioDto, image, district, services };
  });

  return {
    props: {
      studios,
    },
  };
}
