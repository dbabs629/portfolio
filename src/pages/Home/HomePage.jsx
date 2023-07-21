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
    <main className='overflow-y-hidden'>
      <Nav page='about' />
      <section
        id='hero'
        className='w-full bg-darkest h-screen flex flex-col items-center justify-center'>
        <div className='w-full h-48 flex flex-col sm:flex-row justify-center items-center text-white space-x-6'>
          <div className='hidden sm:inline w-1/3 h-full'>
            <LoadImg
              imgLowRes={heroLowResImg}
              imgHighRes={heroHighResImg}
              addClassName='max-w-full w-full max-h-full object-cover rounded-lg'
              alt='alt txt'
            />
            {/* <img
              className='max-w-full w-full max-h-full object-cover rounded-lg'
              src={homeImg}
              alt=''
            /> */}
          </div>
          <div className='flex flex-col'>
            <h1 className='text-2xl sm:text-4xl text-primary'>
              Hi I'm
              <span className='pl-2 text-3xl sm:text-5xl text-orange-300 font-semibold'>
                Daniel
              </span>
              <br /> a Front-end Developer
            </h1>
            <span className='border-b-8 border-orange-300 border-opacity-90 rounded-xl pb-4' />
            <IconsList />
            {/* <p className='text-gray-300'>This is my portfolio.</p> */}
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
