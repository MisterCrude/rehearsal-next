// import { useSession, signIn, signOut } from "next-auth/react";
import { getEntries } from "@/utils/contentful";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Studio, StudioDto } from "@/dto/studio";
import { mapImageDtoToEntity } from "@/utils/mappers/mapDtoToEntity";

interface HomeProps {
  studios: Studio[] | null;
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

  return <>Home</>;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await getEntries<StudioDto>("studio");

  console.log(res[0].description);

  const studios: Studio[] = res.map((studio) => {
    const image = studio?.image ? mapImageDtoToEntity(studio.image) : null;
    const description = null;

    return { ...studio, image, description };
  });

  return {
    props: {
      studios,
    },
  };
};

export default Home;
