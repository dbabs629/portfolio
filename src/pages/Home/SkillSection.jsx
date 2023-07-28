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
      className='w-full py-16 xs:h-screen flex flex-col items-center justify-center'>
      <div className='max-w-[450px] lg:max-w-[700px] w-2/3 flex flex-col items-center space-y-8'>
        <h2 className='mb-16 text-4xl font-semibold text-primary my-8 underline decoration-orange-300 decoration-8 underline-offset-8'>
          Skills
        </h2>
        <div className='w-full flex flex-col items-center justify-between lg:justify-start space-y-6 xs:flex-row xs:space-y-0 xs:items-start lg:space-x-8'>
          <div className='w-36'>
            <LoadImg
              imgLowRes={skillsLowResImg}
              imgHighRes={skillsHighResImg}
              addClassName='max-w-full max-h-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <ul className='max-w-[400px] grid gap-1 grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-2'>
            {skillsList.map((item, i) => (
              <li
                key={i + 0.1}
                className='w-18 xs:w-20 lg:w-24 p-2 xs:p-3 text-center capitalize text-xs rounded-3xl bg-dark text-primary shadow-md md:font-semibold'>
                {item}
              </li>
            ))}
          </ul>
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
            <p className=' text-secondary font-semibold hover:text-tertdark hover:scale-105'>
              Continue about me
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default SkillSection
