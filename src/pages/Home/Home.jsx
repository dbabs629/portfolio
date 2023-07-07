import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import AboutHome from './AboutSection'
import ProjectsHome from './ProjectSection'
import ContactHome from './ContactSection'

function Home() {
  return (
    <div>
      <Nav />
      <section id='hero' className='bg-darkest h-screen flex'>
        <div className='self-center border'>
          <h1 className='text-3xl text-primary'>
            Hi I'm Daniel <br /> and I'm a Front-end Developer
          </h1>
        </div>
      </section>
      <AboutHome />
      <ProjectsHome />
      <ContactHome />
      <Footer />
    </div>
  )
}
export default Home
