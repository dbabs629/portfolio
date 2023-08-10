import SkillList from './SkillList'
import Heading from './Heading'

function ProjectPage({ list, title }) {
  return (
    <>
      <article className='h-screen flex items-center justify-center'>
        <div className='container max-w-[450px] lg:max-w-[700px] w-3/4 sm:w-2/3 flex flex-col space-y-8 items-center border'>
          <Heading title={title} />
          <div className='slide'></div>
          <div className=''>
            <SkillList list={list} />
          </div>
          <div className='text'>
            <p className='text-gray-800'>
              1 Communication is at the heart of my work. I thrive in
              collaborative environments, actively engaging with team members
              and clients to understand their needs and goals. 2 My ability to
              translate complex technical jargon into clear, accessible language
              fosters effective communication throughout the development
              process. Empathy plays a significant role in my approach to
              design.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
export default ProjectPage
