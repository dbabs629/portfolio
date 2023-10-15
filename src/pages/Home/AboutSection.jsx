import { useRef } from 'react'
import SkillList from '../../components/SkillList'
import Heading from '../../components/Heading'
import useObserver from '../../components/useObserver'

function AboutSection() {
  const aboutRef = useRef()
  useObserver(aboutRef)

  let skillsList = [
    'HTML',
    'CSS',
    'TailwindCSS',
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
      className='z-10 my-40 flex h-full w-full flex-col items-center overflow-x-hidden'>
      <Heading title='About Me' />
      <article
        ref={aboutRef}
        className='z-10 flex h-full w-4/5 max-w-[450px] flex-col items-center justify-center space-y-12 lg:max-w-[800px]'>
        <div className='hide hide-left flex w-full self-center lg:max-w-[650px]'>
          <SkillList list={skillsList} />
        </div>
        <div
          id='aboutText'
          className='hide hide-right w-full space-y-4 self-center text-justify text-primary lg:w-4/5 lg:text-lg'>
          <p>About 1</p>
          <p>About 2</p>
        </div>
      </article>
    </section>
  )
}
export default AboutSection
