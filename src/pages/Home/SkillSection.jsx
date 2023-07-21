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
      className='relative w-full h-screen flex flex-col items-center justify-center'>
      <div className='max-w-[600px] flex flex-col items-center space-y-4'>
        <h2 className='text-3xl text-primary'>Skills</h2>
        <div className='w-2/3 flex flex-col sm:flex-row border items-center justify-between sm:w-full'>
          <div className='w-32 h-32'>
            <LoadImg
              imgLowRes={skillsLowResImg}
              imgHighRes={skillsHighResImg}
              addClassName='max-w-full w-full max-h-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <ul className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
            {skillsList.map((item, i) => (
              <li
                key={i + 0.1}
                className='w-24 py-3 text-center uppercase text-xs rounded-3xl bg-dark text-primary font-semibold shadow-md'>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-2/3 sm:w-full flex flex-col justify-around border'>
          <h4 className='text-2xl text-primary text-center sm:text-left'>
            About me
          </h4>
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
