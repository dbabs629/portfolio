import Nav from '../../components/Nav'

function ProjectPage() {
  return (
    <div>
      <Nav page='/' />
      <article className='h-screen flex items-center justify-center'>
        <div className='container max-w-[450px] lg:max-w-[700px] w-2/3 flex flex-col items-center space-y-8 border'>
          <h2 className='mb-16 text-4xl font-semibold text-primary my-8 underline decoration-orange-300 decoration-8 underline-offset-8'>
            Project Title
          </h2>
          <div className=''>
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
    </div>
  )
}
export default ProjectPage
