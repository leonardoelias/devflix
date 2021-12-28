import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./carrosel.css";
import img from "../../assets/filmes/thumb.jpeg";
import { request } from "../../request";

function Card(props) {
  console.log(props);

  return (
    <Link to="/details">
      <div className="card">
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.data.poster_path}`} alt={props.data.title} />
      </div>
    </Link>
  );
}

// 1 - Deixar o titulo fixo
// 2 - Aparecer o titulo quando o estado estiver carregando
// 3 - Imagem do filme ser a image do nosso item
export function Carrosel(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function result() {
      const res = await request("discover/movie");

      setData(res.results);
      setLoading(false);
    }
    result();
  }, []);

  return (
    <>
      <div className="component-carrosel">
        <h2>{props.title}</h2>
        {loading ? (
          "Loading "
        ) : (
          <section className="carrosel">
            <div className="carrosel-container">
              {data.map((item) => (
                <Card data={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
