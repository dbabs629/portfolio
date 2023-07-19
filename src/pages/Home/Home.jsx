import Nav from '../../components/Nav'
import IconsList from '../../components/IconsList'
import HomeImage from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'
import AnimationHome from './AnimationHome'
import SkillSection from './SkillSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Nav page='about' />
      <section
        id='hero'
        className='bg-darkest h-screen flex flex-col justify-center'>
        <div className='flex flex-col items-center text-white'>
          <div className='flex flex-col mx-auto'>
            <h1 className='text-4xl text-primary border-b-8 border-orange-300 border-opacity-90 rounded-xl b-5 pb-2'>
              Hi I'm
              <span className='pl-2 text-5xl text-orange-300 font-semibold'>
                Daniel
              </span>
              <br /> a Front-end Developer
            </h1>
            <IconsList />
            {/* <p className='text-gray-300'>This is my portfolio.</p> */}
          </div>
          <div>
            <img className='w-24 h-24' src={HomeImage} alt='' />
          </div>
        </div>
        <AnimationHome />
      </section>
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
export default Home
