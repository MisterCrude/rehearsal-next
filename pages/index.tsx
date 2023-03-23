// import { useSession, signIn, signOut } from "next-auth/react";
import { Studio, StudioDto } from "@/dto/studio";
import { getEntries } from "@/utils/contentful";
import { mapDtoToImage } from "@/utils/mappers/dtoToObject";
import { richTextToComponent } from "@/utils/mappers/richTextToComponent";
import Box from "@mui/material/Box";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface HomeProps {
  studios: Studio[];
}

function Home({
  studios,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session?.user?.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );

  return (
    <>
      {studios.map((studio) => (
        <Box key={studio.title}>
          <Box>{studio.title}</Box>
          <Box>{richTextToComponent(studio.description)}</Box>
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
