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
          link='/'
          projectLink='/project/webdev-project-page'
          projectLowResImg={projectWebdevLowResImg}
          projectHighResImg={projectWebdevHighResImg}
          alt='project alt txt'
          title='Mocksite Landing Page'
          text={`1 Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. 2 My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design.`}
        />
        <Project
          link='https://daniel-babin-mock-landing-page.netlify.app/'
          projectLink='/project/rps-project-page'
          projectLowResImg={projectRpsLowResImg}
          projectHighResImg={projectRpsHighResImg}
          alt='project alt txt'
          title='Rock Paper Scissors Game'
          text={`1 Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. 2 My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design.`}
        />
        <Project
          link='https://daniel-babin-portfolio.netlify.app'
          projectLink='/project/portfolio-project-page'
          projectLowResImg={projectPorfolioLowResImg}
          projectHighResImg={projectPorfolioHighResImg}
          alt='project alt txt'
          title='Portfolio Website'
          text={`1 Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. 2 My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design.`}
        />
      </div>
    </section>
  )
}
export default ProjectSection
