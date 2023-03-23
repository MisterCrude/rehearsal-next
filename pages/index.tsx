// import { useSession, signIn, signOut } from "next-auth/react";
import { Studio, StudioDto } from "@/dto/studio";
import { getEntries } from "@/utils/contentful";
import { mapDtoToImage } from "@/utils/mappers/dtoToObject";
import { richTextToComponents } from "@/utils/mappers/richTextToComponents";
import Box from "@mui/material/Box";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

interface HomeProps {
  studios: Studio[];
}

function Home({
  studios,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {studios.map(({ title, image, description, phone, email, link }) => (
        <Box key={title}>
          <Box sx={{ position: "relative", width: 400, height: 300 }}>
            {image && <Image fill alt={image.title} src={image.url} />}
          </Box>
          <Box>{title}</Box>
          <Box>{richTextToComponents(description)}</Box>
          <Box>
            <p>
              <a target="blank" href={link}>
                {link}
              </a>
            </p>
            <ul>
              {phone && <li>{phone}</li>}
              {email && <li>{email}</li>}
            </ul>
          </Box>
        </Box>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
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
};

export default Home;
