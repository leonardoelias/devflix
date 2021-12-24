import {Banner} from '../../components/banner'

const imageFake = 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/11/homem-aranha-3-1.jpg';

const filmeDestaque = {
  titulo: 'Homen Aranha',
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
    </div>
  )
}