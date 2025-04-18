import api from "../../services/api";
import { Background } from "./styles";

function Home() {

    async function getMovies() {
        const data = await api.get('movie/popular')

        console.log(data)
    }

    getMovies()

  return (
    <Background img="https://image.tmdb.org/t/p/original/ce3prrjh9ZehEl5JinNqr4jIeaB.jpg.jpg">
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </Background>
  );
}

export default Home;
