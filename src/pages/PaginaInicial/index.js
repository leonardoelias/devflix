import { useState, useEffect } from 'react';
import {Banner} from '../../components/banner'
import {Carrosel}  from '../../components/carrosel'

const request = async (endpoint) => {
  const req = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ba7ebd316e61caf98a856cce19776c0c');
  const json = await req.json();

  return json;
}

export function PaginaInicial() {
  const [data, setData] = useState({})

  useEffect(() => {
    async function result() {
      const res = await request();

      const banner = Math.floor(Math.random() *  res.results.length);

      setData(res.results[banner])
    }
    result()
  }, [])

  return(
    <div className="pag-inicial">
      <Banner data={data} />
      <Carrosel title="Originais da DevFlix" />
      <Carrosel title="Quero ser desenvolvedor Front-end" />
      <Carrosel title="Não quero ser desenvolvedor Back-end" />
    </div>
  )
}