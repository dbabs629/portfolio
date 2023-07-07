import { Link } from 'react-router-dom'

function ProjectsHome() {
  return (
    <section id='projects' className='bg-blue-50 h-screen flex items-center'>
      <div className='border'>
        <p className='text-3xl text-primary'>Projects</p>
        <Link to='projects'>Click to view project</Link>
      </div>
    </section>
  )
}
export default ProjectsHome
