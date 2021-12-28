import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestId } from "../../request";
import './style.css'

export function PaginaDetalhe() {
  const [filme, setFilme] = useState({});
  const params = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function buscarFilme() {
    const resposta = await requestId(params.id);
    return resposta;
  }

  useEffect(() => {
    async function result() {
      const res = await buscarFilme();

      setFilme(res.results[0]);
    }
    result();
  }, [buscarFilme]);

  return (
    <div className="filme">
      <h1>{filme.name}</h1>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${filme.key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
}
