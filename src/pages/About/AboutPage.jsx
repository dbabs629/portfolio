import Nav from '../../components/nav/Nav'
import Heading from '../../components/Heading'
import LoadImg from '../../components/LoadImg'
import SkillList from '../../components/SkillList'
import heroLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash-lowres.jpg'
import heroHighResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'

function About() {
  let skillsList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.JS',
    'Next.JS',
    'TypeScript',
    'Node.JS',
    'Express',
    'Firebase',
    'Mongodb',
    'Git',
    'Figma',
  ]
  return (
    <div className='w-full'>
      <Nav page='/' />
      <div className='w-72 pt-32 mx-auto'>
        <Heading title='About Page' />
      </div>
      <article className='max-w-[450px] w-3/4 mx-auto flex flex-col items-center space-y-8 lg:max-w-[1050px] lg:w-4/5 lg:flex-row lg:justify-between lg:gap-4'>
        <div className='max-w-[308px] w-full'>
          <LoadImg
            imgLowRes={heroLowResImg}
            imgHighRes={heroHighResImg}
            addClassName='max-w-full w-full object-cover rounded-lg'
            alt='alt txt'
          />
        </div>
        <div className='w-full flex flex-col space-y-4 max-w-[572px]'>
          <div className='w-full flex flex-col items-center justify-center xs:gap-4 space-y-4 xs:flex-row xs:space-y-0 lg:justify-start'>
            <SkillList list={skillsList} />
          </div>
          <h4 className='text-3xl text-tertiary font-semibold text-center lg:text-start'>
            About me
          </h4>
          <p className=''>
            While my primary focus is front-end development, I am also actively
            learning back-end technologies to create robust and dynamic web
            applications.
          </p>
          <p>
            Currently, I am expanding my skillset in back-end development to
            complement my expertise in front-end technologies and become a
            proficient full-stack developer.
          </p>
        </div>
      </article>
    </div>
  )
}
export default About
