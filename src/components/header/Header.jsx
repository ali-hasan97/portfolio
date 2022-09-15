import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ali Hasan</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header