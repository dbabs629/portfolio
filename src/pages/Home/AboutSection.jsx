import { useRef } from 'react'
import SkillList from '../../components/SkillList'
import Heading from '../../components/Heading'
import useObserver from '../../components/useObserver'

export default function AboutSection() {
  const aboutRef = useRef()
  useObserver(aboutRef)

  let skillsList = [
    'HTML',
    'CSS',
    'TailwindCSS',
    'Sass',
    'JavaScript',
    'TypeScript',
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
          <p>
            I am a Full-stack Developer, I create web apps using design,
            front-end and back-end technologies. I went to Humber College for
            web design and development. I was taught Design, User Experience,
            Front-end and Back-end technologies. I designed, built & deployed
            web & mobile apps were connected to a database. I continue to expand
            my knowledge of software development by using the LinkedIn Learning
            and Udemy learning platforms. My main focus has been in Front-end
            tech using JavaScript, React and Tailwindcss
          </p>
          <p>
            I attend Meetups with other software developers to make connections
            and gain a better insight into the industry. I'm currently looking
            to work with a team to learn more about developing for production
            and to participate in all levels of development.
          </p>
        </div>
      </article>
    </section>
  )
}
