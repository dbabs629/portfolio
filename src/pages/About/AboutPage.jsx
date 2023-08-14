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
      <div className='mx-auto w-72 pt-32'>
        <Heading title='About Page' />
      </div>
      <article className='mx-auto flex w-3/4 max-w-[450px] flex-col-reverse items-center gap-8 space-y-8 py-12 lg:w-4/5 lg:max-w-[1050px] lg:flex-row lg:justify-between lg:space-y-0'>
        <div className='flex w-full max-w-[572px] flex-col space-y-24 self-start'>
          <div className='space-y-4'>
            <h5 className='text-center text-3xl font-semibold text-emerald lg:text-start'>
              About me 1
            </h5>
            <p className='text-primary lg:text-lg'>
              While my primary focus is front-end development, I am also
              actively learning back-end technologies to create robust and
              dynamic web applications.
            </p>
            <p className='text-primary lg:text-lg'>
              Currently, I am expanding my skillset in back-end development to
              complement my expertise in front-end technologies and become a
              proficient full-stack developer.
            </p>
          </div>
          <div className='space-y-4'>
            <h5 className='text-center text-3xl font-semibold text-red lg:text-start'>
              About me 2
            </h5>
            <p className='text-primary lg:text-lg'>
              Currently, I am expanding my skillset in back-end development to
              complement my expertise in front-end technologies and become a
              proficient full-stack developer.
            </p>
            <p className='text-primary lg:text-lg'>
              Currently, I am expanding my skillset in back-end development to
              complement my expertise in front-end technologies and become a
              proficient full-stack developer.
            </p>
          </div>
          <div className='space-y-4'>
            <h5 className='text-center text-3xl font-semibold text-emerald lg:text-start'>
              About me 3
            </h5>
            <p className='text-primary lg:text-lg'>
              Currently, I am expanding my skillset in back-end development to
              complement my expertise in front-end technologies and become a
              proficient full-stack developer.
            </p>
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-8 lg:flex-col-reverse'>
          <div className='w-full max-w-[308px] lg:max-w-[425px]'>
            <LoadImg
              imgLowRes={heroLowResImg}
              imgHighRes={heroHighResImg}
              addClassName='max-w-full w-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <div className='flex w-full items-center justify-center'>
            <SkillList list={skillsList} />
          </div>
        </div>
      </article>
    </div>
  )
}
export default About
