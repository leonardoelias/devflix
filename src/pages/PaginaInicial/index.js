import { useState, useEffect } from 'react';
import {Banner} from '../../components/banner'
import {Carrosel}  from '../../components/carrosel'
import {request} from '../../request'

export function PaginaInicial() {
  const [data, setData] = useState({})

  useEffect(() => {
    async function result() {
      const res = await request('discover/movie');

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