import { useEffect, useState } from "react";
import { Container, Background, CloseButton } from "./styles";
import { getMovieDetails } from "../../services/getData";

function Modal({ movieId, setShowModal }) {
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    async function fetchMovieDetails() {
      const details = await getMovieDetails(movieId);

      setMovieDetails(details);
    }

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
  }, [movieDetails])
  


  return (
    <Background>
      <Container>
        <CloseButton onClick={() => setShowModal(false)}>❌</CloseButton>
        {movieDetails && (
          <iframe
            src={`https://www.youtube.com/embed/${movieDetails[0].key}`}
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
