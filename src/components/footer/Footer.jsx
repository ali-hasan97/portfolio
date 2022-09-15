import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='footer__socials'>
          <a href="https://linkedin.com/in/syed-ali-hasan" target='_blank' rel='noreferrer'><BsLinkedin size={50} /></a>
          <a href="https://github.com/ali-hasan97" target='_blank' rel='noreferrer'><FaGithub size={50} /></a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Ali Hasan. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer