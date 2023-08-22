import { useRef, useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import LoadImg from '../../components/LoadImg'
import SkillList from '../../components/SkillList'
import aboutLowResImg from '../../assets/images/profile-low.jpg'
import aboutHighResImg from '../../assets/images/profile-high.png'

function About() {
  const aboutRef = useRef()
  const [refVisible, setRefVisible] = useState()

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setRefVisible(entry.isIntersecting)
          refVisible &&
            entry.target.classList.toggle('show', entry.isIntersecting)
          entry.isIntersecting && observer.unobserve(entry.target)
        })
      },
      { rootMargin: '100px', threshold: 0.1 }
    )
    aboutRef.current.querySelectorAll('.hide').forEach((content) => {
      observer.observe(content)
    })
  }, [refVisible])

  return (
    <div className='w-full'>
      <div className='mx-auto w-72 pt-32'>
        <Heading title='About Page' />
      </div>
      <article
        ref={aboutRef}
        className='mx-auto flex w-4/5 max-w-[450px] flex-col-reverse items-center gap-8 space-y-8 py-12 lg:max-w-[1000px] lg:flex-row lg:justify-between lg:space-y-0'>
        <div className='hide hide-left flex w-full max-w-[475px] flex-col space-y-12'>
          <div className='max-w-[400px] space-y-4'>
            <h5 className='text-3xl font-semibold text-emerald'>About me 1</h5>
            <p className='text-primary lg:text-lg'>
              While my primary focus is front-end development, I am also
              actively learning back-end technologies to create robust and
              dynamic web applications.
            </p>
            <p className='text-primary lg:text-lg'>
              Currently, I am expanding my skillset in back-end development to
              complement my expertise in front-end technologies and become a
              proficient full-stack developer.
            </p>
          </div>
          <div className='max-w-[400px] space-y-4'>
            <h5 className='text-3xl font-semibold text-red'>About me 2</h5>
            <p className='text-primary lg:text-lg'>
              Currently, I am expanding my skillset in back-end development to
              complement my expertise in front-end technologies and become a
              proficient full-stack developer.
            </p>
            <p className='text-primary lg:text-lg'>
              Currently, I am expanding my skillset in back-end development to
              complement my expertise in front-end technologies and become a
              proficient full-stack developer.
            </p>
          </div>
          <div className='max-w-[400px] space-y-4'>
            <h5 className='text-3xl font-semibold text-emerald'>About me 3</h5>
            <p className='text-primary lg:text-lg'>
              Currently, I am expanding my skillset in back-end development to
              complement my expertise in front-end technologies and become a
              proficient full-stack developer.
            </p>
          </div>
        </div>
        <div className='hide hide-right flex w-full flex-col items-center gap-8 lg:flex-col-reverse'>
          <div className='w-full max-w-[308px] lg:max-w-[425px]'>
            <LoadImg
              imgLowRes={aboutLowResImg}
              imgHighRes={aboutHighResImg}
              addClassName='max-w-full w-full object-cover rounded-lg'
              alt='alt txt'
            />
          </div>
          <div className='flex w-full items-center justify-center'>
            <SkillList list={skillsList} />
          </div>
        </div>
      </article>
    </div>
  )
}
export default About
