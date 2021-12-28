import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "../../request";
import "./carrosel.css";

function Card(props) {
  return (
    <Link to={`/details/${props.data.id}`}>
      <div className="card">
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.data.poster_path}`} alt={props.data.title} />
      </div>
    </Link>
  );
}

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
