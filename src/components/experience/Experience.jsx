import './experience.css'
import {BsCheck} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="container experience__container">
        {/* <article className="experience">
          <div className="experience__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="experience__list">
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article> */}
        {/* END OF UI/UX */}

        <article className="experience">
          <div className="experience__head">
            <h3>L.A. Fuess Partners</h3>
            <h5>Structural Engineer</h5>
            <h5>06/2019 – 04/2022</h5>
          </div>

          <ul className="experience__list">
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Independently managed $10M-$60M projects from start to finish, overseeing both the design and construction phases.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Engineered strong but efficient structural designs for large schools, hospitals, and offices.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Created spreadsheets to automate manual analyses, improving analysis times by 94%.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Maintained constant communication with contractors, architects, and other disciplines to ensure our team delivers the best possible product for projects. Coordinated all critical items with them to avoid any surprises that would affect the budget.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Demonstrated strong analytical and problem-solving skills for time-sensitive construction issues.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}

        {/* <article className="experience">
          <div className="experience__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="experience__list">
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='experience__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article> */}
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Experience