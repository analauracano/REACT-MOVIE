import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import {
  getPopularSeries,
  getTopSeries,
  getSeriesToday,
  getSeriesNext
} from "../../services/getData";
import { Container, Info } from "./styles";

function Series() {
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [seriesToday, setSeriesToday] = useState([]);
  const [seriesNext, setSeriesNext] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllData() {
      try {
        const [top, popular, today, next] = await Promise.all([
          getTopSeries(),
          getPopularSeries(),
          getSeriesToday(),
          getSeriesNext(),
        ]);

        setTopSeries(top);
        setPopularSeries(popular);
        setSeriesToday(today);
        setSeriesNext(next);
      } catch (error) {
        console.error("Erro ao carregar séries:", error);
      } finally {
        setLoading(false);
      }
    }

    getAllData();
  }, []);

  return (
    <>
      <Container>
        <Info>
          <h1>SÉRIES</h1>
        </Info>
      </Container>

      {loading ? (
        <p style={{ color: "white", textAlign: "center" }}>Carregando séries...</p>
      ) : (
        <>
          {topSeries.length > 0 && <Slider info={topSeries} title="Top Séries" />}
          {popularSeries.length > 0 && <Slider info={popularSeries} title="Séries Populares" />}
          {seriesToday.length > 0 && <Slider info={seriesToday} title="Séries de Hoje" />}
          {seriesNext.length > 0 && <Slider info={seriesNext} title="Séries em Breve" />}
        </>
      )}
    </>
  );
}

export default Series;
