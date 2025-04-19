import { useEffect, useState } from "react";
import api from "../../services/api";
import { Background } from "./styles";

function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("movie/popular");

      setMovies(results[1]);
    }

    console.log(movies)
    getMovies();
  }, []);

  return (
    <>
      {movies && (
        <Background img="https://image.tmdb.org/t/p/original/ce3prrjh9ZehEl5JinNqr4jIeaB.jpg.jpg">
          <h1>{movies.title}</h1>
          <p>{movies.overview}</p>
        </Background>
      )}
    </>
  );
}

export default Home;
