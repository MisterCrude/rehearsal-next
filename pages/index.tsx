import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import { Studio, StudioDto } from "@/dto/studio";
import { getEntries } from "@/utils/contentful";
import { mapDtoToImage } from "@/utils/mappers/dtoToObject";
import { InferGetServerSidePropsType } from "next";

export default function Home({
  studios,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      {studios.map((studio) => (
        <StudioCard key={studio.title} studio={studio} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const entries = await getEntries<StudioDto>("studio");

  const studios: Studio[] = entries.map((studio) => {
    const image = studio?.image ? mapDtoToImage(studio.image) : null;

    return { ...studio, image };
  });

  return {
    props: {
      studios,
    },
  };
}
