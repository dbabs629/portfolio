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
  return (
    <article className='w-full flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:gap-12 lg:items-center lg:justify-center'>
      <div className='max-w-[450px] w-full self-center duration-300 hover:scale-105 lg:hidden'>
        <a href={link}>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full object-cover rounded-lg'
            alt={alt}
          />
        </a>
      </div>
      <div className='max-w-full w-full flex flex-col space-y-6 lg:max-w-[500px] lg:w-1/2'>
        <h3 className='text-3xl text-tertiary'>{title}</h3>
        <p className='text-primary text-justify'>{text}</p>
        <Link className='max-w-[150px]' to={projectLink}>
          <Button>Project details</Button>
        </Link>
      </div>
      <div className='max-w-[500px] hidden duration-300 hover:scale-105 lg:block lg:w-2/3'>
        <a href={link}>
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
