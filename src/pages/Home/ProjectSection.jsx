import Project from '../../components/Project'
import projectLowResImg from '../../assets/images/webdev-mocksite.PNG'
import projectHighResImg from '../../assets/images/webdev-mocksite.PNG'

import projectRpsHighResImg from '../../assets/images/rps.png'

function ProjectSection() {
  return (
    <section
      id='projects'
      className='w-full py-16 flex flex-col items-center justify-center bg-blue-50'>
      <h2 className='mb-16 text-4xl font-semibold text-primary underline decoration-orange-300 decoration-8 underline-offset-8 lg:self-center'>
        Projects
      </h2>
      <div className='max-w-[450px] w-3/4 sm:w-2/3 flex flex-col justify-center items-center space-y-48 lg:max-w-[700px]'>
        <Project
          projectLowResImg={projectLowResImg}
          projectHighResImg={projectHighResImg}
          link='https://daniel-babin-mock-landing-page.netlify.app/'
          alt='project alt txt'
          title='Web Development Company Landing Page'
          text={`1 Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. 2 My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design.`}
        />
        <Project
          projectLowResImg={projectRpsHighResImg}
          projectHighResImg={projectRpsHighResImg}
          alt='project alt txt'
          title='Rock Paper Scissors Lizard Spock Game'
          text={`1 Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. 2 My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design.`}
        />
        <Project
          projectLowResImg={projectLowResImg}
          projectHighResImg={projectHighResImg}
          alt='project alt txt'
          title='Family Tree Web App'
          text={`1 Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. 2 My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design.`}
        />
      </div>
    </section>
  )
}
export default ProjectSection
