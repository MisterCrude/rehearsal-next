import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { connectToDatabase } from "@/utils/mongodb";
import { MovieDto } from "@/dto/movies";

export const getServerSideProps: GetServerSideProps<{
  movies: MovieDto[];
}> = async () => {
  try {
    const { db } = await connectToDatabase();

    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    return {
      props: {
        movies: JSON.parse(JSON.stringify(movies)),
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Cant fetch movies");
  }
};

type MoviesProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Movies = ({ movies }: MoviesProps) => {
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>
            <h2>{movie.title}</h2>
            <h3>{movie.metacritic}</h3>
            <p>{movie.plot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
