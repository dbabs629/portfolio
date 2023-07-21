import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

function ProjectPage() {
  return (
    <div>
      <Nav page='/' />
      <main className='h-screen flex'>
        <div className='self-center'>
          <p className='text-3xl text-primary'>Projects Page</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default ProjectPage
