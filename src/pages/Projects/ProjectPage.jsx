import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

function ProjectPage() {
  return (
    <div>
      <Nav page='/' />
      <section className='h-screen flex'>
        <div className='self-center'>
          <p className='text-3xl text-primary'>Projects Page</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default ProjectPage
