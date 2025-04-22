import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState();
  const [movies, setMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {

      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
      .then(([movies, topMovies, topSeries, popularSeries, topPeople]) => {
          setMovies(movies);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setTopPeople(topPeople);
        
      })
      .catch((error) => console.error(error));
    }

    getAllData();
  }, []);

  return (
    <>
      {movies && (
        <Background img={getImages(movies.backdrop_path)}>
          {showModal && (
            <Modal movieId={movies.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movies.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
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
      {popularSeries && (
        <Slider info={popularSeries} title={"Séries Populares"} />
      )}
      {topPeople && <Slider info={topPeople} title={"Artistas Populares"} />}
    </>
  );
}

export default Home;
