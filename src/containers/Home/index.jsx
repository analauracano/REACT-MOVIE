import { useEffect, useState } from "react";
import api from "../../services/api";
import { Background, Container, ContainerButtons, Info, Poster } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";

function Home() {
  const [movies, setMovies] = useState();
  const [topMovies, setTopMovies] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("movie/popular");

      setMovies(results[0]);
    }

    async function getTopMovies() {
        const {
          data: { results },
        } = await api.get("movie/top_rated");
  
        console.log(results);
        setTopMovies(results);
      }

    getTopMovies();
    getMovies();
  }, []);

  return (
    <>
      {movies && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>
                <Button red={true}>Assista Agora</Button>
                <Button red={false}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                alt="poster"
                src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
              />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'}/>}
    </>
  );
}

export default Home;
