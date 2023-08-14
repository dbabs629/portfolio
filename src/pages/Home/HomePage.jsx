import SkillSection from './AboutSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'

function Home() {
  return (
    <main>
      <section
        id='hero'
        className='flex h-screen w-full max-w-full flex-col items-center justify-center overflow-hidden bg-darkest'>
        <div className='z-10 flex w-2/3 flex-col items-center justify-center space-x-0 lg:flex-row lg:space-x-16'>
          <div className='flex flex-col'>
            <h1 className='animate-flip-down text-xl font-semibold text-primary xs:text-2xl sm:text-4xl'>
              Hi I'm
              <span className='inline pl-2 text-2xl font-semibold text-red xs:text-3xl sm:text-5xl'>
                Daniel
              </span>
              <br />
              I'm a Front-end Developer
            </h1>
            <span className='slide-right w-full rounded-xl border-b-8 border-tertiary border-opacity-90 pb-4 sm:w-full' />
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
