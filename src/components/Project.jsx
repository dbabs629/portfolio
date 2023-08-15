import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import LoadImg from './LoadImg'

function Project({
  title,
  text,
  projectLowResImg,
  projectHighResImg,
  alt,
  link,
  projectLink,
}) {
  const projectRef = useRef()
  const [refVisible, setRefVisible] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let pos = 0
        entries.forEach((entry) => {
          pos++
          setRefVisible(entry.isIntersecting)
          refVisible &&
            entry.target.classList.toggle('show', entry.isIntersecting)
          entry.isIntersecting && observer.unobserve(entry.target)
          console.log(pos)
        })
      },
      { rootMargin: '100px', threshold: 0.1 }
    )
    projectRef.current.querySelectorAll('.hide').forEach((content) => {
      observer.observe(content)
    })
  }, [refVisible])

  return (
    <article
      ref={projectRef}
      className='flex w-full flex-col space-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:space-y-0'>
      <div className='hide hide-right w-full max-w-[450px] self-center duration-300 hover:scale-105 lg:hidden'>
        <a href={link}>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full object-cover rounded-lg'
            alt={alt}
          />
        </a>
      </div>
      <div className='hide hide-left flex w-full max-w-full flex-col space-y-8 lg:w-1/2 lg:max-w-[500px]'>
        <h3 className='text-3xl text-red'>{title}</h3>
        <p className='text-justify text-primary lg:text-lg'>{text}</p>
        <Link className='max-w-[150px]' to={projectLink}>
          <Button>Project details</Button>
        </Link>
      </div>
      <div className='hide hide-right hidden max-w-[500px] duration-300 hover:scale-105 lg:block lg:w-2/3'>
        <a href={link} rel='noreferrer' target='_blank'>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full max-h-[300px] h-full object-cover rounded-lg'
            alt={alt}
          />
        </a>
      </div>
    </article>
  )
}
export default Project
