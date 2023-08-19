import SkillList from '../../components/SkillList'
import Heading from '../../components/Heading'
import Slider from '../../components/Slider'

function ProjectPage({ list, title, alt, imgList, link }) {
  return (
    <div className='w-full'>
      <div className='flex justify-center pt-32'>
        <Heading title={title} />
      </div>
      <article className='mx-auto flex w-4/5 max-w-[450px] flex-col items-center space-y-8 lg:max-w-[700px]'>
        <div className='self-start'>
          <Slider title={title} imgList={imgList} alt={alt} link={link} />
        </div>
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
      </article>
    </div>
  )
}
export default ProjectPage
