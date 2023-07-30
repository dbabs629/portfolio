import Nav from '../../components/nav/Nav'
import Heading from '../../components/Heading'
import LoadImg from '../../components/LoadImg'
import heroLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash-lowres.jpg'
import heroHighResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'

function About() {
  return (
    <div className='w-full h-screen'>
      <Nav page='/' />
      <article className='w-4/5 py-24 flex flex-col mx-auto'>
        <div className='w-full text-center mx-auto'>
          <Heading title='About Page' />
        </div>
        <div className='w-full flex flex-col justify-between items-center space-y-8 md:space-y-0 md:flex-row md:items-end'>
          <div className='w-1/2 xs:w-1/3 md:w-1/4'>
            <LoadImg
              imgLowRes={heroLowResImg}
              imgHighRes={heroHighResImg}
              addClassName='max-w-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <div className='w-2/3 lg:self-end space-y-2'>
            <p className=''>
              While my primary focus is front-end development, I am also
              actively learning back-end technologies to create robust and
              dynamic web applications.
            </p>
            <p>
              Currently, I am expanding my skillset in back-end development to
              complement my expertise in front-end technologies and become a
              proficient full-stack developer.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
export default About
