import Layout from "@/components/Layout";
import { getContentPayload } from "@/contentful-api/contentPayload";
import { richTextToComponents } from "@/utils/mappers/richTextToComponents";
import { InferGetServerSidePropsType } from "next";

export default function About({
  payload,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Layout>{richTextToComponents(payload.content)}</Layout>;
}

export async function getServerSideProps() {
  const payload = await getContentPayload("about-page");

  return {
    props: {
      payload,
    },
  };
}
