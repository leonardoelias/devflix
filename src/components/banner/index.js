import { Link } from "react-router-dom";
import  {MdPlayArrow} from 'react-icons/md'
import  {BsPlus} from 'react-icons/bs'
import './banner.css';

const imageFake = 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/11/homem-aranha-3-1.jpg';

export function Banner(props){
  const {data} = props;

  return (
    <section className='banner'>
      <div className='banner-content'>
        <h1>{data.titulo}</h1>
        <div className='banner-info'>
          <p style={{ color: '#47D268'}}>{data.pontos} pontos</p>
          <p>{data.data_lancamento}</p>
          <p>{data.temporadas} temporada</p>
        </div>
        <div className='banner-acao'>
          <Link to="details" className='banner-button'>
            <MdPlayArrow />
            Assistir
          </Link>
          <button type="button" className='banner-button banner-button-inverse'>
            <BsPlus />
            Minha lista
          </button>
        </div>
        <div className='banner-footer'>
          <h2>{data.genreo}</h2>
          <p>{data.descricao}</p>
        </div>
      </div>
      <div className='banner-img'>
        <img src={data.imagem} alt="Banner do filme homen aranha" />
      </div>
    </section>
  )
}