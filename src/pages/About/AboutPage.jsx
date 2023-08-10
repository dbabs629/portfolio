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
    <div className='w-full h-screen'>
      <Nav page='/' />
      <article className='w-full mx-auto py-24 flex flex-col items-center justify-center space-y-4'>
        <Heading title='About Page' />
        <div className='w-2/3 flex space-x-6'>
          <div className='max-w-[200px] w-1/3'>
            <LoadImg
              imgLowRes={heroLowResImg}
              imgHighRes={heroHighResImg}
              addClassName='max-w-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <div className='self-end'>
            <SkillList list={skillsList} />
          </div>
        </div>
        <div className='w-2/3 space-y-2'>
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
