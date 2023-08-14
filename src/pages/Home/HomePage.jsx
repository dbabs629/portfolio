import LoadImg from '../../components/LoadImg'
import heroLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash-lowres.jpg'
import heroHighResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'
import SkillSection from './AboutSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'

function Home() {
  return (
    <main>
      <section
        id='hero'
        className='max-w-full w-full h-screen bg-darkest flex flex-col items-center justify-center overflow-hidden'>
        <div className='z-10 w-2/3 flex flex-col items-center justify-center space-x-0 lg:flex-row lg:space-x-16'>
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
        {/* <div className='max-w-full w-full overflow-x-hidden z-0'>
          <span className='animation-move-sm absolute z-0 w-0 h-0 opacity-20 rounded-2xl bottom-0 left-4 border-l-[50px] border-l-transparent border-t-[75px] border-t-dark border-r-[50px] border-r-transparent' />
          <span className='animation-move-lg absolute z-0 w-12 h-12 bg-dark opacity-20 rounded-2xl bottom-0 left-4' />
          <span className='animation-move-md absolute z-0 w-8 h-8 bg-dark opacity-20 rounded-md bottom-0 left-1/4' />
          <span className='animation-move-lg absolute z-0 w-0 h-0 opacity-20 rounded-2xl bottom-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-dark border-r-[50px] border-r-transparent mx-auto' />
          <span className='animation-move-sm absolute z-0 w-4 h-4 bg-dark opacity-20 rounded-md bottom-0 left-1/3' />
          <span className='animation-move-lg absolute z-0 w-12 h-12 bg-dark opacity-20 rounded-2xl bottom-0 left-1/3' />
          <span className='animation-move-lg absolute z-0 w-0 h-0 opacity-20 rounded-2xl bottom-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-dark border-r-[50px] border-r-transparent left-3/4' />
          <span className='animation-move-sm absolute z-0 w-8 h-8 bg-dark opacity-20 rounded-md bottom-0 left-3/4' />
          <span className='animation-move-md absolute z-0 w-6 h-6 bg-dark opacity-20 rounded-md bottom-0 left-2/3' />
          <span className='animation-move-lg absolute z-0 w-12 h-12 bg-dark opacity-20 rounded-2xl bottom-0 right-4' />
          <span className='animation-move-lg absolute z-0 w-8 h-8 bg-dark opacity-20 rounded-md bottom-0 left-4' />
          <span className='animation-move-md absolute z-0 w-10 h-10 bg-dark opacity-20 rounded-md bottom-0 left-1/4' />
          <span className='animation-move-lg absolute z-0 w-4 h-4 bg-dark opacity-20 rounded-md bottom-0 left-1/3' />
          <span className='animation-move-sm absolute z-0 w-12 h-12 bg-dark opacity-20 rounded-xl bottom-0 mx-auto' />
          <span className='animation-move-md absolute z-0 w-8 h-8 bg-dark opacity-20 rounded-md bottom-0 left-3/4' />
          <span className='animation-move-sm absolute z-0 w-12 h-12 bg-dark opacity-20 rounded-2xl bottom-0 left-2/3' />
          <span className='animation-move-lg absolute z-0 w-4 h-4 bg-dark opacity-20 rounded-md bottom-0 right-4' />
        </div> */}
        {/* <span className='absolute bottom-0 max-w-full w-full py-10 transition-opacity bg-gradient-to-t from-darker to-60% to-transparent overflow-x-hidden -z-10'>
          <AnimationHome />
        </span> */}
      </section>

      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}
export default Home
