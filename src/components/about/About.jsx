import './about.css' 
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3 years of engineering experience</small>
            </article>

            <article className="about__card">
              <GiSkills className='about_icon' />
              <h5>Skills</h5>
              <small>relevant to both front-end and back-end</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>demonstrating experience with several technologies</small>
            </article>
          </div>

          <p>
            I worked as a structural engineer for 3 years, managing and designing several large scale projects that include schools, hospitals, and offices. 
            Having a long-standing interest in programming, I decided to take the plunge and study computer science full-time. 
            This has allowed me to get my computer science fundamentals down, and create several projects that demonstrate my ability as a developer. 
            Take a look!
          </p>
          
          <a href="#portfolio" className='btn btn-primary'>View Portfolio!</a>
        </div>
      </div>
    </section>
  )
}

export default About