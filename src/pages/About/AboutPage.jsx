import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

function About() {
  return (
    <div>
      <Nav page='/' />
      <main className='h-screen flex'>
        <div className='self-center border'>
          <h2 className='text-3xl text-primary'>About Page</h2>
          <div>
            <p>
              While my primary focus is front-end development, I am also
              actively learning back-end technologies to create robust and
              dynamic web applications. Currently, I am expanding my skillset in
              back-end development to complement my expertise in front-end
              technologies and become a proficient full-stack developer. My goal
              is to create user-friendly interfaces and captivating digital
              experiences that leave a lasting impact. Staying up-to-date with
              the latest industry trends, I specialize in crafting responsive
              websites that work seamlessly across all devices. With a constant
              drive for excellence, I find joy in turning complex concepts into
              elegant code and optimizing website performance in this
              ever-evolving world of web development.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default About
