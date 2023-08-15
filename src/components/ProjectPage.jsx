import SkillList from './SkillList'
import Heading from './Heading'
import LoadImg from './LoadImg'

function ProjectPage({
  list,
  title,
  alt,
  projectLowResImg,
  projectHighResImg,
  link,
}) {
  return (
    <div className='w-full'>
      <div className='flex justify-center pt-32'>
        <Heading title={title} />
      </div>
      <article className='mx-auto flex w-3/4 max-w-[450px] flex-col items-center space-y-8 sm:w-2/3 lg:max-w-[700px]'>
        <div className='w-full max-w-[450px] self-center duration-300 hover:scale-105 lg:hidden'>
          <a href={link}>
            <LoadImg
              imgLowRes={projectLowResImg}
              imgHighRes={projectHighResImg}
              addClassName='max-w-full object-cover rounded-lg'
              alt={alt}
            />
          </a>
        </div>
        <div className='slide w-full border'>Slide</div>
        <div className='self-start'>
          <SkillList list={list} />
        </div>
        <div>
          <p className='text-primary lg:text-lg'>
            1 Communication is at the heart of my work. I thrive in
            collaborative environments, actively engaging with team members and
            clients to understand their needs and goals. 2 My ability to
            translate complex technical jargon into clear, accessible language
            fosters effective communication throughout the development process.
            Empathy plays a significant role in my approach to design.
          </p>
        </div>
        <div className='hidden max-w-[500px] duration-300 hover:scale-105 lg:block lg:w-2/3'>
          <a href={link} rel='noreferrer' target='_blank'>
            <LoadImg
              imgLowRes={projectLowResImg}
              imgHighRes={projectHighResImg}
              addClassName='max-w-full max-h-[300px] h-full object-cover rounded-lg'
              alt={alt}
            />
          </a>
        </div>
      </article>
    </div>
  )
}
export default ProjectPage
