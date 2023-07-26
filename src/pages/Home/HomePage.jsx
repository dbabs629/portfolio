import Nav from '../../components/Nav'
import IconsList from '../../components/IconsList'
import LoadImg from '../../components/LoadImg'
import heroLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash-lowres.jpg'
import heroHighResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'
import AnimationHome from './AnimationHome'
import SkillSection from './SkillSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'
import Footer from '../../components/Footer'

function Home() {
  return (
    <main>
      <Nav page='about' />
      <section
        id='hero'
        className='w-full bg-darkest h-screen flex flex-col items-center justify-center'>
        <div className='w-full flex flex-col items-center justify-center space-x-0 sm:flex-row sm:space-x-16'>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold sm:text-4xl text-primary'>
              Hi I'm
              <h1 className='inline pl-2 text-3xl sm:text-5xl text-secondary font-semibold'>
                Daniel
              </h1>
              <br /> a Front-end Developer
            </h1>
            <span className='w-80 border-b-8 border-orange-300 border-opacity-90 rounded-xl pb-4 sm:w-full' />
            <IconsList />
          </div>
          <div className='w-1/6'>
            <div className=''>
              <LoadImg
                imgLowRes={heroLowResImg}
                imgHighRes={heroHighResImg}
                addClassName='max-w-full object-cover rounded-lg'
                alt='alt txt'
              />
            </div>
          </div>
        </div>
        <AnimationHome />
      </section>
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
export default Home
