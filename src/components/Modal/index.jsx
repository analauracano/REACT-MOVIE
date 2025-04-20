import { useEffect, useState } from "react";
import { Container, Background, CloseButton } from "./styles";
import api from "../../services/api";

function Modal({ movieId, setShowModal }) {
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const {
          data: { results },
        } = await api.get(`/movie/${movieId}/videos`);

        console.log(results[0]);
        setMovieDetails(results[0]);
      } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
      }
    }

    if (movieId) {
      getMovieDetails();
    }
  }, [movieId]);

  return (
    <Background>
      <Container>
        <CloseButton onClick={() => setShowModal(false)}>❌</CloseButton>
        {movieDetails && (
          <iframe
            src={`https://www.youtube.com/embed/${movieDetails.key}`}
            title="YouTube video player"
            height="500px"
            width="100%"
            allowFullScreen
          ></iframe>
        )}
      </Container>
    </Background>
  );
}

export default Modal;
