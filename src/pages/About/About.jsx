import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

function About() {
  return (
    <div>
      <Nav />
      <main className='h-screen flex'>
        <div className='self-center border'>
          <p className='text-3xl text-primary'>About Page</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default About
