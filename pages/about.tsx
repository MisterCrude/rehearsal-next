import { getContentPayload } from "@/contentful-api/contentPayload";
import Primary from "@/layouts/Primary";
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
