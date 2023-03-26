import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import { Studio, StudioDto } from "@/dto/studio";
import { getEntries } from "@/utils/contentful";
import { assetToImageField } from "@/utils/mappers/assetToImageField";
import { entryToDistrictField } from "@/utils/mappers/entryToDistrictField";
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

  const studios: Studio[] = entries.map((studio) => {
    const image = studio.image ? assetToImageField(studio.image) : undefined;
    const district = entryToDistrictField(studio.district);

    console.log(studio);

    return { ...studio, image, district };
  });

  return {
    props: {
      studios,
    },
  };
}
