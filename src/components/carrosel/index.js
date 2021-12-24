import {Link} from 'react-router-dom'
import './carrosel.css';
import img from '../../assets/filmes/thumb.jpeg'

function Card(){
  return (
    <Link to="/details">
      <div className='card'>
        <img src={img} alt="borderdown" />
      </div>
    </Link>
  )
}

export function Carrosel(props) {
  return (
    <section className="carrosel">
      <h2>{props.title}</h2>
      <div className='carrosel-container'>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}