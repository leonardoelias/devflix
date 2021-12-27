import { useState, useEffect } from 'react';
import {Banner} from '../../components/banner'
import {Carrosel}  from '../../components/carrosel'

const imageFake = 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/11/homem-aranha-3-1.jpg';

const filmeDestaque = {
  titulo: 'Homen Aranha',
  descricao: 'Depois de ser picado por uma aranha geneticamente modificada, Peter Parker ganha super poderes e as habilidades da aranha para se agarrar a qualquer superfície.',
  pontos: '4',
  data_lancamento: '2020',
  temporadas: '1',
  genero: 'Terror',
  imagem: imageFake,
}

const request = async (endpoint) => {
  const req = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ba7ebd316e61caf98a856cce19776c0c');
  const json = await req.json();

  return json
}

export function PaginaInicial() {
  const [data, setData] = useState()

  useEffect(() => {
    async function result() {
      const res = await request();

      setData(res.results[0])
    }
    result()
  }, [])


  return(
    <div className="pag-inicial">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Banner data={filmeDestaque} />
      <Carrosel title="Originais da DevFlix" />
      <Carrosel title="Quero ser desenvolvedor Front-end" />
      <Carrosel title="Não quero ser desenvolvedor Back-end" />
    </div>
  )
}