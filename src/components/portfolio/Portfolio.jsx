import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import { useState } from 'react'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Blogging Blobs',
    description: "Full-stack blog site created using Python’s Django framework for the back-end and some Bootstrap for the front-end. Deployed using AWS (Elastic Beanstalk, EC2, S3).",
    github: 'https://github.com/ali-hasan97/Django-Blog',
    demo: 'https://bloggingblobs.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Pixel Sketch',
    description: "Sketching app created using HTML, CSS, and Javascript. It presents a grid that can be marked in any color or in rainbow mode. Each cell in the grid can be lightened, darkened, erased, or resized.",
    github: 'https://github.com/ali-hasan97/pixel-sketch',
    demo: 'https://ali-hasan97.github.io/pixel-sketch/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Chilli the Cat',
    description: "Static webpage about my cat. Created using HTML and CSS.",
    github: 'https://github.com/ali-hasan97/chilli-the-cat',
    demo: 'https://ali-hasan97.github.io/chilli-the-cat/'
  }
]

const progress = [
  {
    id: 1,
    image: IMG4,
    title: 'Country Look-Up',
    description: "Responsive React app that allows users to look up a country using an API. The country's information such as its capital, flag, and even its capital's current weather (generated from a second API) is provided. This page has not been styled...yet!",
    github: 'https://github.com/ali-hasan97/country-lookup',
    demo: 'https://ali-hasan97.github.io/country-lookup/'
  },
  {
    id: 2,
    image: IMG5,
    title: 'Phonebook',
    description: "Full-stack web app created using MERN. Currently unstyled. Lets users add a name and a number to the phonebook, which is searchable. Data is updated if a duplicate name is added with a unique number. All entries are stored in a MongoDB database.",
    github: 'https://github.com/ali-hasan97/phonebook-backend',
    demo: 'https://phonebook-app-123.fly.dev/'
  },
  {
    id: 3,
    image: IMG6,
    title: 'Note Taker',
    description: "Simple full-stack note-taking app created using the MERN stack. Currently unstyled. It lets users add notes to a list. All entries are stored in a MongoDB database.",
    github: 'https://github.com/ali-hasan97/notes-app-backend',
    demo: 'https://bold-breeze-5811.fly.dev/'
  }
]

const Portfolio = () => {

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                  <div className='portfolio__item-image-content'>{description}</div>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target = '_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

      <section>
        <h2>Projects in Progress</h2>
        <div className="container portfolio__container">
          {
            progress.map(({id, image, title, description, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                    <div className='portfolio__item-image-content'>{description}</div>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target = '_blank' rel="noreferrer">GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
    </section>
  )
}

export default Portfolio