import { Link } from 'react-router-dom'
import Button from './Button'
import LoadImg from './LoadImg'

function Project({ title, text, projectLowResImg, projectHighResImg, alt }) {
  return (
    <article className='w-full flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:gap-12 lg:items-center'>
      <div className='max-w-[450px] self-center lg:hidden'>
        <a href='/'>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full object-cover rounded-lg'
            alt={alt}
          />
        </a>
      </div>
      <div className='flex flex-col space-y-6 lg:w-1/2'>
        <h3 className='text-3xl text-primary'>{title}</h3>
        <p className='text-gray-800 text-justify'>{text}</p>
        <Link className='max-w-[150px]' to='project'>
          <Button>View project</Button>
        </Link>
      </div>
      <div className='hidden lg:w-1/2 lg:block lg:self-start'>
        <a href='/'>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full object-cover rounded-lg'
            alt={alt}
          />
        </a>
      </div>
    </article>
  )
}
export default Project
