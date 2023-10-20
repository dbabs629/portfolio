import Project from './Project'
import projectWebdevLowResImg from '../../assets/images/webdev-mocksite-small-01.png'
import projectWebdevHighResImg from '../../assets/images/webdev-mocksite-01.PNG'
import projectRpsLowResImg from '../../assets/images/rps-01.png'
import projectRpsHighResImg from '../../assets/images/rps-01.png'
import projectPorfolioLowResImg from '../../assets/images/portfolio-01.PNG'
import projectPorfolioHighResImg from '../../assets/images/portfolio-01.PNG'
import Heading from '../../components/Heading'

export default function ProjectSection() {
  return (
    <section
      id='projects'
      className='z-10 my-20 flex w-full flex-col items-center justify-center space-y-8 overflow-x-hidden py-20'>
      <Heading title='Projects' />
      <div className='flex w-4/5 max-w-[450px] flex-col items-center justify-center space-y-48 lg:max-w-full'>
        <Project
          link='https://daniel-babin-rps-game.netlify.app/'
          projectLink='/project/rps-project-page'
          projectLowResImg={projectRpsLowResImg}
          projectHighResImg={projectRpsHighResImg}
          alt='project alt txt'
          title='Rock Paper Scissors Game'
          text='The Rock Paper Scissors Lizard Spock game is a coding challenge designed by Front-end Mentor available on their website and I built this project from scratch. The rules are similar to Rock Paper Scissors but with two extra options: Lizard and Spock. I chose this project because I want to show my vanilla JavaScript and CSS knowledge. Click the project image to see the live demo or click the project details button to learn more.'
        />
        <Project
          link='https://daniel-babin-portfolio.netlify.app'
          projectLink='/project/portfolio-project-page'
          projectLowResImg={projectPorfolioLowResImg}
          projectHighResImg={projectPorfolioHighResImg}
          alt='project alt txt'
          title='Portfolio Website'
          text='My portfolio website showcases my current projects, my resume and a contact form you can fill out to email me directly. This project help me to practice using React, Tailwindcss, responsive design and it is deployed to & hosted by Netlify. Click the project image to see the live demo or click the project details button to learn more.'
        />
        <Project
          link='https://daniel-babin-mock-landing-page.netlify.app/'
          projectLink='/project/webdev-project-page'
          projectLowResImg={projectWebdevLowResImg}
          projectHighResImg={projectWebdevHighResImg}
          alt='project alt txt'
          title='Mocksite Landing Page'
          text='This is a landing page for a mock web development company that provides web design and development services. I used the Discord Midjourney AI to generate all of the image assets in this project. I created this project to practice using Figma for designing my projects, practice building responsive layouts and to learn Tailwindcss. Click the project image to see the live demo or click the project details button to learn more.'
        />
      </div>
    </section>
  )
}
