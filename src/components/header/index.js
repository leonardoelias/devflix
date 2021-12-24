import { Link } from 'react-router-dom';
import './header.css'
import img from '../../assets/logo-devflix.png'

export function Header() {
  function abraOProfile() {
    alert('profile')
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" title="Ir para a home do DevFlix">
          <img src={img} alt="DevFlix" className='header-logo-img' />
        </Link>
        <button className='header-logo-profile' type="button" onClick={abraOProfile} />
      </div>
    </header>
  )
}