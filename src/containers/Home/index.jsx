import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";

function Home() {
  const [showModal, setShowModal] = useState();
  const [movies, setMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
    const [topPeople, setTopPeople] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      console.log(results[0]);
      setMovies(results[0]);
    }

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      console.log(results);
      setTopMovies(results);
    }

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");

      console.log(results);
      setTopSeries(results);
    }

    async function getPopularSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");

      console.log(results);
      setPopularSeries(results);
    }

    async function getTopPeople() {
        const {
          data: { results },
        } = await api.get("/person/popular");
  
        console.log('Artistas populares' + results);
        setTopPeople(results);
      }

    getMovies();
    getTopMovies();
    getTopSeries();
    getPopularSeries();
    getTopPeople();
  }, []);

  return (
    <>
      {movies && (
        <Background img={getImages(movies.backdrop_path)}>
            {showModal && <Modal movieId={movies.id} setShowModal={setShowModal}/>}
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>
                <Button red>Assista Agora</Button>
                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="poster" src={getImages(movies.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
      {popularSeries && <Slider info={popularSeries} title={"Séries Populares"} />}
      {topPeople && <Slider info={topPeople} title={"Artistas Populares"} />}
    </>
  );
}

export default Home;
