import Primary from "@/layouts/Primary";
import { getContentPayload } from "@/resources/contentful/content-payload";
import { richTextToComponents } from "@/utils/mappers/richTextToComponents";
import { InferGetServerSidePropsType } from "next";

export default function About({
  payload,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Primary>{richTextToComponents(payload.content)}</Primary>;
}

export async function getServerSideProps() {
  const payload = await getContentPayload("about-page");

  return {
    props: {
      payload,
    },
  };
}
