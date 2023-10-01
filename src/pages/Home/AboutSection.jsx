import { useRef } from 'react'
import { Link } from 'react-router-dom'
import LoadImg from '../../components/LoadImg'
import SkillList from '../../components/SkillList'
import aboutLowResImg from '../../assets/images/profile-low.jpg'
import aboutHighResImg from '../../assets/images/profile-high.png'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import useObserver from '../../components/useObserver'

function AboutSection() {
  const aboutRef = useRef()
  useObserver(aboutRef)

  let skillsList = [
    'HTML',
    'CSS',
    'TailwindCSS',
    'Bootstrap',
    'JavaScript',
    'React.JS',
    'Next.JS',
    'Node.JS',
    'Express',
    'Firebase',
    'Git',
    'NPM',
    'Figma',
  ]

  return (
    <section
      id='about'
      className='z-10 my-40 flex w-full flex-col items-center space-y-8 overflow-x-hidden'>
      <Heading title='About' />
      <article
        ref={aboutRef}
        className='flex w-4/5 max-w-[450px] flex-col items-center space-y-8 lg:max-w-[1050px] lg:flex-row lg:justify-between lg:gap-4 lg:space-x-8 lg:space-y-0'>
        <div className='hide hide-left w-full max-w-[300px] xs:max-w-[325px] lg:max-w-[400px]'>
          <LoadImg
            imgLowRes={aboutLowResImg}
            imgHighRes={aboutHighResImg}
            addClassName='max-w-full w-full object-cover rounded-lg'
            alt='alt txt'
          />
        </div>
        <div className='hide hide-right flex w-full max-w-[572px] flex-col space-y-12'>
          <div className='flex w-full flex-col items-center justify-center space-y-4 xs:flex-row xs:gap-4 xs:space-y-0 lg:justify-start'>
            <SkillList list={skillsList} />
          </div>
          <p className='max-w-[450px] text-justify text-primary lg:text-lg'>
            I'm a front-end web developer with a strong drive for understanding
            and a passion for problem-solving. I find joy in crafting seamless
            user experiences by combining my technical expertise with an
            empathetic approach to design. Always eager to learn, adapt, and
            explore the latest trends in the ever-evolving world of web
            development. When I'm not coding, you can find me exercising,
            cooking, reading, or watching a movie.
          </p>
          <Link className='w-40' to='about'>
            <Button>Continue reading</Button>
          </Link>
        </div>
      </article>
    </section>
  )
}
export default AboutSection
