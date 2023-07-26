import Project from '../../components/Project'
import projectLowResImg from '../../assets/images/webdev-mocksite.PNG'
import projectHighResImg from '../../assets/images/webdev-mocksite.PNG'

function ProjectSection() {
  return (
    <section
      id='projects'
      className='w-full py-16 flex flex-col items-center justify-center bg-blue-50'>
      <h2 className='mb-16 text-4xl font-semibold text-primary underline decoration-orange-300 decoration-8 underline-offset-8 lg:self-center'>
        Projects
      </h2>
      <div className='max-w-[650px] w-2/3 flex flex-col justify-center items-center space-y-48 lg:max-w-[900px]'>
        <Project
          projectLowResImg={projectLowResImg}
          projectHighResImg={projectHighResImg}
          alt='project alt txt'
          title='Web Development Company Landing Page'
          text={`Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design. Understanding the end-users' perspectives allows me to craft intuitive interfaces that resonate with their needs and preferences. This user-centered mindset guides me in creating seamless and enjoyable interactions that enhance the overall user experience.`}
        />
        <Project
          projectLowResImg={projectLowResImg}
          projectHighResImg={projectHighResImg}
          alt='project alt txt'
          title='Rock Paper Scissors Lizard Spock Game'
          text={`Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design. Understanding the end-users' perspectives allows me to craft intuitive interfaces that resonate with their needs and preferences. This user-centered mindset guides me in creating seamless and enjoyable interactions that enhance the overall user experience.`}
        />
        <Project
          projectLowResImg={projectLowResImg}
          projectHighResImg={projectHighResImg}
          alt='project alt txt'
          title='Family Tree Web App'
          text={`Communication is at the heart of my work. I thrive in collaborative environments, actively engaging with team members and clients to understand their needs and goals. My ability to translate complex technical jargon into clear, accessible language fosters effective communication throughout the development process. Empathy plays a significant role in my approach to design. Understanding the end-users' perspectives allows me to craft intuitive interfaces that resonate with their needs and preferences. This user-centered mindset guides me in creating seamless and enjoyable interactions that enhance the overall user experience.`}
        />
      </div>
    </section>
  )
}
export default ProjectSection
