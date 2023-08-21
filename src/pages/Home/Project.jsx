import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import LoadImg from '../../components/LoadImg'

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
        entries.forEach((entry) => {
          setRefVisible(entry.isIntersecting)
          refVisible &&
            entry.target.classList.toggle('show', entry.isIntersecting)
          entry.isIntersecting && observer.unobserve(entry.target)
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
      className='flex w-full flex-col-reverse space-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:space-y-0'>
      <div className='hide hide-left mt-12 flex w-full max-w-full flex-col space-y-8 lg:mt-0 lg:w-1/2 lg:max-w-[500px]'>
        <h3 className='text-3xl text-red'>{title}</h3>
        <p className='text-justify text-primary lg:text-lg'>{text}</p>
        <Link className='max-w-[150px]' to={projectLink}>
          <Button>Project details</Button>
        </Link>
      </div>
      <div className='hide hide-right w-full max-w-[450px] self-center rounded-lg shadow-sm shadow-white lg:block lg:w-2/3 lg:max-w-[500px]'>
        <a href={link} rel='noreferrer' target='_blank'>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full max-h-[300px] h-full object-cover rounded-lg duration-300 hover:scale-105'
            alt={alt}
          />
        </a>
      </div>
    </article>
  )
}
export default Project
