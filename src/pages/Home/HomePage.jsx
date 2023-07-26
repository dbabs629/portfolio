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
        <div className='w-2/3 flex flex-col items-center justify-center space-x-0 lg:flex-row lg:space-x-16'>
          <div className='flex flex-col'>
            <h1 className='text-2xl xs:text-3xl sm:text-4xl font-semibold text-primary'>
              Hi I'm
              <h1 className='inline pl-2 text-xl xs:text-3xl sm:text-5xl font-semibold text-secondary'>
                Daniel
              </h1>
              <br />{' '}
              <h1 className='text-xl xs:text-3xl sm:text-4xl font-semibold'>
                a Front-end Developer
              </h1>
            </h1>
            <span className='w-full border-b-8 border-orange-300 border-opacity-90 rounded-xl pb-4 sm:w-full' />
            <IconsList />
          </div>
          <div className='self-start w-1/4'>
            <LoadImg
              imgLowRes={heroLowResImg}
              imgHighRes={heroHighResImg}
              addClassName='hidden lg:block max-w-full object-cover rounded-lg'
              alt='alt txt'
            />
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
