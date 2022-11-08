import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Ali Hasan</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />

      </div>
    </header>
  )
}

export default Header