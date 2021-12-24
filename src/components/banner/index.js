import  {MdPlayArrow} from 'react-icons/md'
import  {BsPlus} from 'react-icons/bs'
import './banner.css';

const imageFake = 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/11/homem-aranha-3-1.jpg';

export function Banner(){
  return (
    <section className='banner'>
      <div className='banner-content'>
        <h1>Nome do filme</h1>
        <div className='banner-info'>
          <p style={{ color: '#47D268'}}>4 pontos</p>
          <p>2021</p>
          <p>1 temporada</p>
        </div>
        <div className='banner-acao'>
          <button type="button" className='banner-button'>
            <MdPlayArrow />
            Assistir
          </button>
          <button type="button" className='banner-button banner-button-inverse'>
            <BsPlus />
            Minha lista
          </button>
        </div>
        <div className='banner-footer'>
          <h2>Gêneros</h2>
          <p>laslj;alkdjas</p>
        </div>
      </div>
      <div className='banner-img'>
        <img src={imageFake} alt="Banner do filme homen aranha" />
      </div>
    </section>
  )
}