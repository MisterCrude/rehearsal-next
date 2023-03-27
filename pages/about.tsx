import Layout from "@/components/Layout";
import { getPage } from "@/contentful/page";
import { richTextToComponents } from "@/utils/mappers/richTextToComponents";
import { InferGetServerSidePropsType } from "next";

export default function About({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Layout>{richTextToComponents(page.content)}</Layout>;
  return <>1</>;
}

export async function getServerSideProps() {
  const page = await getPage("about");

  return {
    props: {
      page,
    },
  };
}
