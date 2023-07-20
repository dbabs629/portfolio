import { Link } from 'react-router-dom'
import skillsImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'

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
      className='relative w-full h-screen flex items-center justify-center'>
      <div className='w-full flex flex-col items-center space-y-4'>
        <h2 className='text-3xl text-primary'>Skills</h2>
        <div className='flex flex-col sm:flex-row border items-center space-y-4 sm:space-y-0 sm:space-x-4'>
          <div className='w-32 h-32 mx-auto'>
            <img
              className='max-w-full w-full max-h-full object-cover rounded-lg'
              src={skillsImg}
              alt=''
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
        <div className='w-full flex flex-col justify-around border'>
          <h4 className='text-2xl text-primary'>About me</h4>
          <p>This is a bit about me</p>
          <Link to='about'>Continue about me</Link>
        </div>
      </div>
    </section>
  )
}
export default SkillSection
