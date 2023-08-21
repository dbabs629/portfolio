import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadImg from '../../components/LoadImg'
import SkillList from '../../components/SkillList'
import skillsLowResImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'
import skillsHighResImg from '../../assets/images/profile-img.jpg'
import Button from '../../components/Button'
import Heading from '../../components/Heading'

function AboutSection() {
  const aboutRef = useRef()
  const [refVisible, setRefVisible] = useState()

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
      className='z-20 flex w-full flex-col items-center space-y-8 overflow-x-hidden py-40'>
      <Heading title='About' />
      <article
        ref={aboutRef}
        className='z-20 flex w-4/5 max-w-[450px] flex-col items-center space-y-8 lg:max-w-[1050px] lg:flex-row lg:justify-between lg:gap-4 lg:space-x-8 lg:space-y-0'>
        <div className='hide hide-left w-full max-w-[300px] xs:max-w-[425px] lg:max-w-[400px]'>
          <LoadImg
            imgLowRes={skillsLowResImg}
            imgHighRes={skillsHighResImg}
            addClassName='max-w-full w-full object-cover rounded-lg'
            alt='alt txt'
          />
        </div>
        <div className='hide hide-right flex w-full max-w-[572px] flex-col space-y-12'>
          <div className='flex w-full flex-col items-center justify-center space-y-4 xs:flex-row xs:gap-4 xs:space-y-0 lg:justify-start'>
            <SkillList list={skillsList} />
          </div>
          <p className='max-w-[450px] text-justify text-primary lg:text-lg'>
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
