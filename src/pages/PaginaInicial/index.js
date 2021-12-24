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

export function PaginaInicial() {
  return(
    <div className="pag-inicial">
      <Banner data={filmeDestaque} />
      <Carrosel title="Originais da DevFlix" />
      <Carrosel title="Quero ser desenvolvedor Front-end" />
      <Carrosel title="Não quero ser desenvolvedor Back-end" />
    </div>
  )
}