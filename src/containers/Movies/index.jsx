import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import { getMovies, getTopMovies, getMovieNowPlaying, getUpcomingMovies } from "../../services/getData";
import { Container, Info } from "./styles";

function Movies() {
  const [movies, setMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [movieNowPlaying, setMovieNowPlaying] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();
  
  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getMovieNowPlaying(),
        getUpcomingMovies(),
      ])
        .then(([movies, topMovies, movieNowPlaying, upcomingMovies]) => {
          setMovies(movies);
          setTopMovies(topMovies);
          setMovieNowPlaying(movieNowPlaying);
          setUpcomingMovies(upcomingMovies);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, [])

   return(
        <>
            <Container>
                <Info>
                    <h1>FILMES</h1>
                </Info>
            </Container>
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {/* {movies && <Slider info={movies} title={'Filmes Populares'} />} */}
            {upcomingMovies && <Slider info={upcomingMovies} title={'Em Breve'} />}
            {movieNowPlaying && <Slider info={movieNowPlaying} title={'Filmes em Cartaz no Cinema'} />}
        </>
    )
}

export default Movies;
