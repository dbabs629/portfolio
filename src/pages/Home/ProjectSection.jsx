import Project from '../../components/Project'
import projectLowResImg from '../../assets/images/webdev-mocksite.PNG'
import projectHighResImg from '../../assets/images/webdev-mocksite.PNG'
import projectRpsHighResImg from '../../assets/images/rps.png'
import Heading from '../../components/Heading'

function ProjectSection() {
  return (
    <section
      id='projects'
      className='flex w-full flex-col items-center justify-center space-y-8 overflow-x-hidden bg-darkest py-40'>
      <Heading title='Projects' />
      <div className='flex w-3/4 max-w-[450px] flex-col items-center justify-center space-y-48 lg:w-4/5 lg:max-w-full'>
        <Project
          link='/'
          projectLink='/project/rps-project-page'
          projectLowResImg={projectLowResImg}
          projectHighResImg={projectRpsHighResImg}
          alt='project alt txt'
          title='Family Tree Web App'
          text={`1 Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. 2 My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design.`}
        />
        <Project
          link='https://daniel-babin-mock-landing-page.netlify.app/'
          projectLink='/project/webdev-project-page'
          projectLowResImg={projectLowResImg}
          projectHighResImg={projectHighResImg}
          alt='project alt txt'
          title='Mocksite Landing Page'
          text={`1 Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. 2 My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design.`}
        />
        <Project
          link='https://daniel-babin-rps-game.netlify.app/'
          projectLink='/project/rps-project-page'
          projectLowResImg={projectRpsHighResImg}
          projectHighResImg={projectRpsHighResImg}
          alt='project alt txt'
          title='Rock Paper Scissors Game'
          text={`1 Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. 2 My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design.`}
        />
      </div>
    </section>
  )
}
export default ProjectSection
