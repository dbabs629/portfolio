import Nav from '../../components/Nav'
import Heading from '../../components/Heading'
import LoadImg from '../../components/LoadImg'
import heroLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash-lowres.jpg'
import heroHighResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'

function About() {
  return (
    <div className='w-full h-screen'>
      <Nav page='/' />
      <article className='w-full py-24 flex flex-col'>
        <div className='w-full text-center mx-auto'>
          <Heading title='About Page' />
        </div>
        <div className='w-4/5 mx-auto flex flex-col space-y-8 md:space-y-0 xs:w-3/4 md:flex-row'>
          <div className='w-full h-48'>
            <LoadImg
              imgLowRes={heroLowResImg}
              imgHighRes={heroHighResImg}
              addClassName='max-w-full max-h-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <div className='w-full'>
            <p className=''>
              While my primary focus is front-end development, I am also
              actively learning back-end technologies to create robust and
              dynamic web applications. Currently, I am expanding my skillset in
              back-end development to complement my expertise in front-end
              technologies and become a proficient full-stack developer. My goal
              is to create user-friendly interfaces and captivating digital
              experiences that leave a lasting impact. Staying up-to-date with
              the latest industry trends, I specialize in crafting responsive
              websites that work seamlessly across all devices. With a constant
              drive for excellence, I find joy in turning complex concepts into
              elegant code and optimizing website performance in this
              ever-evolving world of web development.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
export default About
