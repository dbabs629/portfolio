import Nav from '../../components/Nav'
import IconsList from '../../components/IconsList'
import LoadImg from '../../components/LoadImg'
import heroLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash-lowres.jpg'
import heroHighResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'
import AnimationHome from './AnimationHome'
import SkillSection from './AboutSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'
import Footer from '../../components/Footer'

function Home() {
  return (
    <main>
      <Nav page='about' />
      <section
        id='hero'
        className='w-full h-screen bg-darkest flex flex-col items-center justify-center'>
        <div className='z-20 w-2/3 flex flex-col items-center justify-center space-x-0 lg:flex-row lg:space-x-16'>
          <div className='flex flex-col'>
            <h1 className='text-xl xs:text-2xl sm:text-4xl font-semibold text-primary'>
              Hi I'm
              <span className='inline pl-2 text-2xl xs:text-3xl sm:text-5xl font-semibold text-tertiary'>
                Daniel
              </span>
              <br />
              I'm a Front-end Developer
            </h1>
            <span className='w-full border-b-8 border-tertiary border-opacity-90 rounded-xl pb-4 sm:w-full' />
            <div className='w-2/3 sm:w-1/2 text-3xl pl-2 mt-6 animate-bounce'>
              <IconsList />
            </div>
          </div>
          <div className='hidden self-start w-1/4'>
            <LoadImg
              imgLowRes={heroLowResImg}
              imgHighRes={heroHighResImg}
              addClassName='hidden lg:block max-w-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
        </div>
        <span className='animation-move-sm absolute z-0 w-0 h-0 opacity-10 rounded-2xl bottom-0 left-4 border-l-[50px] border-l-transparent border-t-[75px] border-t-white border-r-[50px] border-r-transparent' />
        <span className='animation-move-lg absolute z-0 w-16 h-16 bg-white opacity-10 rounded-2xl bottom-0 left-4' />
        <span className='animation-move-md absolute z-0 w-10 h-10 bg-white opacity-10 rounded-md bottom-0 left-1/4' />
        <span className='animation-move-lg absolute z-0 w-0 h-0 opacity-10 rounded-2xl bottom-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-white border-r-[50px] border-r-transparent mx-auto' />
        <span className='animation-move-sm absolute z-0 w-6 h-6 bg-white opacity-10 rounded-md bottom-0 left-1/3' />
        <span className='animation-move-lg absolute z-0 w-16 h-16 bg-white opacity-10 rounded-2xl bottom-0 left-1/3' />
        <span className='animation-move-lg absolute z-0 w-0 h-0 opacity-10 rounded-2xl bottom-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-white border-r-[50px] border-r-transparent left-3/4' />
        <span className='animation-move-sm absolute z-0 w-8 h-8 bg-white opacity-10 rounded-md bottom-0 left-3/4' />
        <span className='animation-move-md absolute z-0 w-10 h-10 bg-white opacity-10 rounded-md bottom-0 left-2/3' />
        <span className='animation-move-lg absolute z-0 w-16 h-16 bg-white opacity-10 rounded-2xl bottom-0 right-4' />
        <span className='animation-move-lg absolute z-0 w-8 h-8 bg-white opacity-10 rounded-md bottom-0 left-4' />
        <span className='animation-move-md absolute z-0 w-10 h-10 bg-white opacity-10 rounded-md bottom-0 left-1/4' />
        <span className='animation-move-lg absolute z-0 w-6 h-6 bg-white opacity-10 rounded-md bottom-0 left-1/3' />
        <span className='animation-move-sm absolute z-0 w-16 h-16 bg-white opacity-10 rounded-xl bottom-0 mx-auto' />
        <span className='animation-move-md absolute z-0 w-8 h-8 bg-white opacity-10 rounded-md bottom-0 left-3/4' />
        <span className='animation-move-sm absolute z-0 w-16 h-16 bg-white opacity-10 rounded-2xl bottom-0 left-2/3' />
        <span className='animation-move-lg absolute z-0 w-6 h-6 bg-white opacity-10 rounded-md bottom-0 right-4' />

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
