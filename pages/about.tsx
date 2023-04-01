import Layout from "@/components/Layout";
import { getContentPayload } from "@/contentful/contentPayload";
import { richTextToComponents } from "@/utils/mappers/richTextToComponents";
import { InferGetServerSidePropsType } from "next";

export default function About({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Layout>{richTextToComponents(page.content)}</Layout>;
}

export async function getServerSideProps() {
  const page = await getContentPayload("about-page");

  return {
    props: {
      page,
    },
  };
}
