import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import LoadImg from '../../components/LoadImg'
import useObserver from '../../components/useObserver'

export default function Project({
  title,
  text,
  projectLowResImg,
  projectHighResImg,
  alt,
  link,
  projectLink,
}) {
  const projectRef = useRef()
  useObserver(projectRef)

  return (
    <article
      ref={projectRef}
      className='z-10 flex w-full flex-col-reverse space-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:space-y-0'>
      <div className='hide hide-left z-10 mt-12 flex w-full max-w-full flex-col space-y-8 lg:mt-0 lg:w-1/2 lg:max-w-[500px]'>
        <h3 className='text-3xl text-red'>{title}</h3>
        <p className='text-justify text-primary lg:text-lg'>{text}</p>
        <Link className='max-w-[150px]' to={projectLink}>
          <Button>Project details</Button>
        </Link>
      </div>
      <div className='hide hide-right z-10 w-full max-w-[450px] self-center rounded-lg lg:block lg:w-2/3 lg:max-w-[500px]'>
        <a href={link} rel='noreferrer' target='_blank'>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full max-h-[300px] h-full object-cover rounded-lg transition-all duration-300 hover:scale-110 shadow-emerald shadow'
            alt={alt}
          />
        </a>
      </div>
    </article>
  )
}
