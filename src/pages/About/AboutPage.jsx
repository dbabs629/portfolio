import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import LoadImg from '../../components/LoadImg'
import heroLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash-lowres.jpg'
import heroHighResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'

function About() {
  return (
    <div>
      <Nav page='/' />
      <article className='w-full h-screen flex flex-col items-center justify-center'>
        <div className='w-full text-center mx-auto'>
          <Heading title='About Page' />
        </div>
        <div className='max-w-[700px] lg:max-w-[900px] w-3/4 h-72 flex border'>
          <div className='w-1/3 h-full'>
            <LoadImg
              imgLowRes={heroLowResImg}
              imgHighRes={heroHighResImg}
              addClassName='max-w-full h-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <div className='w-2/3'>
            <p>
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

      <Footer />
    </div>
  )
}
export default About
