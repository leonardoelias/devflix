import { useState, useEffect } from "react";
import { Banner } from "../../components/banner";
import { Carrosel } from "../../components/carrosel";
import { request } from "../../request";

export function PaginaInicial() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function result() {
      const res = await request("discover/movie");

      const banner = Math.floor(Math.random() * res.results.length);

      setData(res.results[banner]);
    }
    result();
  }, []);

  const list = [
    {
      title: "Originais",
      movies: "movie/popular",
    },
    {
      title: "Em breve",
      movies: "movie/upcoming",
    },
    {
      title: "Assistindo agora",
      movies: "movie/now_playing",
    },
  ];

  return (
    <div className="pag-inicial">
      <Banner data={data} />
      {list.map((item) => (
        <Carrosel title={item.title} movies={item.movies} />
      ))}
    </div>
  );
}
