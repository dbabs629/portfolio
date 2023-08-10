import { Link } from 'react-router-dom'
import LoadImg from '../../components/LoadImg'
import SkillList from '../../components/SkillList'
import skillsLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'
import skillsHighResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'
import Button from '../../components/Button'
import Heading from '../../components/Heading'

function AboutSection() {
  let skillsList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.JS',
    'TailwindCSS',
    'TypeScript',
    'Node.JS',
    'Express',
    'Firebase',
    'Mongodb',
    'Git',
    'Figma',
  ]

  return (
    <section
      id='about'
      className='w-full py-32 flex flex-col items-center space-y-8'>
      <Heading title='About' />
      <article className='max-w-[450px] w-3/4 flex flex-col items-center space-y-8 lg:max-w-[1050px] lg:w-4/5 lg:flex-row lg:justify-between lg:gap-4'>
        <div className='max-w-[308px] w-full'>
          <LoadImg
            imgLowRes={skillsLowResImg}
            imgHighRes={skillsHighResImg}
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
          <p className='text-justify'>
            Hello, I'm a front-end web developer with a strong drive for
            understanding and a passion for problem-solving. I find joy in
            crafting seamless user experiences by combining my technical
            expertise with an empathetic approach to design. Always eager to
            learn and adapt, I thrive on acquiring new skills and staying
            up-to-date with the latest trends in the ever-evolving world of web
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
