import './skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {DiReact} from 'react-icons/di'

import {DiPython} from 'react-icons/di'
import {DiDjango} from 'react-icons/di'
import {SiFlask} from 'react-icons/si'
import {DiMongodb} from 'react-icons/di'
import {SiMysql} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiAmazonaws} from 'react-icons/si'

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Front-end Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <div>
                <AiFillHtml5 size={30} className="skills__details-icon" />
                <h4>HTML</h4>
              </div>
            </article>
            
            <article className="skills__details">
              <div>
                <DiCss3 size={30} className="skills__details-icon" />
                <h4>CSS</h4>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <SiJavascript size={30} className="skills__details-icon" />
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <SiBootstrap size={30} className="skills__details-icon" />
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <DiReact size={30} className="skills__details-icon" />
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT-END */}

        <div className="skills__backend">
          <h3>Back-end Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <div>
                <DiPython size={30} className="skills__details-icon" />
                <h4>Python</h4>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <DiDjango size={30} className="skills__details-icon" />
                <h4>Django</h4>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <SiFlask size={30} className="skills__details-icon" />
                <h4>Flask</h4>
              </div>
            </article>
            
            <article className="skills__details">
              <div>
                <DiMongodb size={30} className="skills__details-icon" />
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <SiExpress size={30} className="skills__details-icon" />
                <h4>Express</h4>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <FaNodeJs size={30} className="skills__details-icon" />
                <h4>NodeJS</h4>
              </div>
            </article> 
            
            {/* <article className="skills__details">
              <div>
                <SiMysql size={30} className="skills__details-icon" />
                <h4>MySQL</h4>
              </div>
            </article>*/}

            <article className="skills__details">
              <div>
                <SiAmazonaws size={30} className="skills__details-icon" />
                <h4>AWS</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills