import { Link } from 'react-router-dom'

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
      className='relative h-screen flex items-center justify-center'>
      <div className='w-2/3 flex flex-col'>
        <h2 className='text-3xl text-primary'>Skills</h2>
        <div className='w-full flex gap-10 border border-black'>
          <div className='w-32 h-32'>
            <img
              className='w-full h-full border'
              src='../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'
              alt=''
            />
          </div>
          <ul className='grid grid-cols-2 sm:grid-cols-4 gap-1'>
            {skillsList.map((item, i) => (
              <li
                key={i + 0.1}
                className='w-24 py-3 text-center uppercase text-xs rounded-3xl bg-dark text-primary font-semibold shadow-md'>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full flex flex-col justify-around border border-black'>
          <h4 className='text-2xl text-primary'>About me</h4>
          <p>This is a bit about me</p>
          <Link to='about'>Continue about me</Link>
        </div>
      </div>
    </section>
  )
}
export default SkillSection
