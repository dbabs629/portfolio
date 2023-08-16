import SkillSection from './AboutSection'
import ProjectSection from './ProjectSection'
import ContactSection from './ContactSection'

function Home() {
  return (
    <main>
      <section
        id='hero'
        className='my-32 flex h-96 w-full max-w-full flex-col items-center justify-center overflow-x-hidden bg-darkest xs:h-screen xs:py-0'>
        <div className='z-10 flex w-4/5 flex-col items-center justify-center space-x-0 lg:flex-row lg:space-x-16'>
          <div className='flex flex-col'>
            <h1 className='animate-flip-down w-full text-3xl font-semibold text-red xs:text-5xl md:text-7xl'>
              DANIEL BABIN
            </h1>
            <p className='animate-flip-down w-full text-xl font-semibold text-primary xs:text-3xl md:text-5xl'>
              I'm a Front-end Developer
            </p>
            <span className='slide-right w-full rounded-xl border-b-8 border-primary border-opacity-90 pb-4 sm:w-full' />
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
