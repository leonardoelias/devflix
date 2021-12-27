import { Link } from "react-router-dom";
import  {MdPlayArrow} from 'react-icons/md'
import  {BsPlus} from 'react-icons/bs'
import './banner.css';

export function Banner(props){
  const {data} = props;

  const year = new Date(data.release_date).getFullYear();

  return (
    <section className='banner'>
      <div className='banner-content'>
        <h1>{data.title}</h1>
        <div className='banner-info'>
          <p style={{ color: '#47D268'}}>{data.vote_average} pontos</p>
          <p>{year}</p>
          {/* aperecer temporadas só quando for serie */}
          {/* <p>{data.temporadas} temporada</p> */}
        </div>
        <div className='banner-acao'>
          <Link to={`details/${data.id}`} className='banner-button'>
            <MdPlayArrow />
            Assistir
          </Link>
          <button type="button" className='banner-button banner-button-inverse'>
            <BsPlus />
            Minha lista
          </button>
        </div>
        <div className='banner-footer'>
          {/* <h2>{data.genreo}</h2> */}
          <p>{data.overview}</p>
        </div>
      </div>
      <div className='banner-img'>
        <img src={`http://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="Banner do filme homen aranha" />
      </div>
    </section>
  )
}