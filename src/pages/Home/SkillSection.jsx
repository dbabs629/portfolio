import { Link } from 'react-router-dom'
import LoadImg from '../../components/LoadImg'
import skillsLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'
import skillsHighResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'

function SkillSection() {
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
      id='skills'
      className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='w-full mx-auto p-8 flex flex-col justify-center sm:items-center space-y-8 lg:max-w-[60rem] lg:px-0'>
        <h2 className='text-3xl text-primary self-start lg:self-center my-8 underline decoration-orange-300 decoration-8 underline-offset-8'>
          Skills
        </h2>
        <div className='w-full flex flex-col space-y-8 xs:flex-row xs:items-start xs:space-x-4 xs:space-y-0'>
          <div className='w-32 h-32'>
            <LoadImg
              imgLowRes={skillsLowResImg}
              imgHighRes={skillsHighResImg}
              addClassName='max-w-full w-full max-h-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <ul className='grid gap-1 grid-cols-2 xs:grid-cols-3 md:grid-cols-4 md:gap-2'>
            {skillsList.map((item, i) => (
              <li
                key={i + 0.1}
                className='w-20 py-2 text-center uppercase text-xs rounded-3xl bg-dark text-primary shadow-md sm:w-24 sm:py-3 md:font-semibold'>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full flex flex-col space-y-4'>
          <h4 className='text-2xl text-primary'>About me</h4>
          <p>
            Hello, I'm a front-end web developer with a strong drive for
            understanding and a passion for problem-solving. I find joy in
            crafting seamless user experiences by combining my technical
            expertise with an empathetic approach to design. Always eager to
            learn and adapt, I thrive on acquiring new skills and staying
            up-to-date with the latest trends in the ever-evolving world of web
            development. When I'm not coding, you can find me exercising,
            cooking, reading, or watching a movie.
          </p>
          <Link to='about'>Continue about me</Link>
        </div>
      </div>
    </section>
  )
}
export default SkillSection
