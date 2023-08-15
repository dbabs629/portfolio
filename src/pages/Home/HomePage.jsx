import SkillSection from './AboutSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'

function Home() {
  return (
    <main>
      <section
        id='hero'
        className='flex h-screen w-full max-w-full flex-col items-center justify-center overflow-x-hidden bg-darkest'>
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
      </section>

      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}
export default Home
