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
    <section
      id='about'
      className='w-full my-16 xs:h-screen flex flex-col items-center justify-center'>
      <article className='max-w-[450px] lg:max-w-[700px] w-3/4 flex flex-col items-center space-y-8'>
        <Heading title='About' />
        <div className='w-full flex flex-col items-center xs:gap-2 sm:justify-between space-y-4 xs:flex-row xs:space-y-0 xs:items-start lg:justify-start lg:space-x-8'>
          <div className='w-48'>
            <LoadImg
              imgLowRes={skillsLowResImg}
              imgHighRes={skillsHighResImg}
              addClassName='max-w-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <SkillList list={skillsList} />
        </div>
        <div className='flex flex-col space-y-4'>
          <h4 className='text-3xl text-primary'>About me</h4>
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
