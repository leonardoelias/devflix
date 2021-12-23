import './header.css'
import img from '../../assets/logo-devflix.png'

export function Header() {
  function abraOProfile() {
    alert('profile')
  }

  return (
    <header className="header">
      <div className="header-container">
        <a href="./" title="Ir para a home do DevFlix">
          <img src={img} alt="DevFlix" className='header-logo-img' />
        </a>
        <button className='header-logo-profile' type="button" onClick={abraOProfile} />
      </div>
    </header>
  )
}