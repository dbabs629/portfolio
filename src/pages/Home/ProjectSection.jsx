import Project from './Project'
import projectWebdevLowResImg from '../../assets/images/webdev-mocksite-low.jpg'
import projectWebdevHighResImg from '../../assets/images/webdev-mocksite-high.png'
import projectRpsLowResImg from '../../assets/images/rps-low.jpg'
import projectRpsHighResImg from '../../assets/images/rps-high.png'
import projectPorfolioLowResImg from '../../assets/images/portfolio-low.jpg'
import projectPorfolioHighResImg from '../../assets/images/portfolio-high.PNG'
import Heading from '../../components/Heading'

function ProjectSection() {
  return (
    <section
      id='projects'
      className='z-10 flex w-full flex-col items-center justify-center space-y-8 overflow-x-hidden py-40'>
      <Heading title='Projects' />
      <div className='flex w-4/5 max-w-[450px] flex-col items-center justify-center space-y-48 lg:max-w-full'>
        <Project
          link='https://daniel-babin-mock-landing-page.netlify.app/'
          projectLink='/project/rps-project-page'
          projectLowResImg={projectRpsLowResImg}
          projectHighResImg={projectRpsHighResImg}
          alt='project alt txt'
          title='Rock Paper Scissors Game'
          text={`My Rock Paper Scissors Lizard Spock game was designed by Front-end Mentor as a coding challenge and I developed it from scratch. The user clicks an option and the computer chooses an option at random and if the user wins, the score increases and if they lose, the score decreases. If they tie or the score reaches zero, the score does not change. Click the project image to see the live demo or click the project details button to learn more.`}
        />
        <Project
          link='https://daniel-babin-portfolio.netlify.app'
          projectLink='/project/portfolio-project-page'
          projectLowResImg={projectPorfolioLowResImg}
          projectHighResImg={projectPorfolioHighResImg}
          alt='project alt txt'
          title='Portfolio Website'
          text={`I designed and developed my portfolio myself. I built it to showcase some of my work and knowledge of Front-end technologies. Click the project details button to learn more.`}
        />
        <Project
          link='/'
          projectLink='/project/webdev-project-page'
          projectLowResImg={projectWebdevLowResImg}
          projectHighResImg={projectWebdevHighResImg}
          alt='project alt txt'
          title='Mocksite Landing Page'
          text={`I designed and developed this web development company landing page. It's a mocksite to showcase different layouts and I built a slider for a group of images the user can click through. Click the project image to see the live demo or click the project details button to learn more.`}
        />
      </div>
    </section>
  )
}
export default ProjectSection
