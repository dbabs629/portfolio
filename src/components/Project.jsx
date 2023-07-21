import { Link } from 'react-router-dom'
import LoadImg from './LoadImg'

function Project({ title, text, projectLowResImg, projectHighResImg, alt }) {
  return (
    <article className='w-full flex items-center'>
      <div className='w-full flex flex-col mx-auto lg:flex-row space-y-8 lg:space-x-8 lg:space-y-0'>
        <div className='lg:hidden w-full max-w-[400px]'>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full w-full max-h-full object-cover rounded-lg'
            alt={alt}
          />
        </div>
        <div className='w-full flex flex-col justify-around space-y-4 sm:w-full'>
          <h3 className='text-3xl text-primary'>{title}</h3>
          <p className='text-gray-800'>{text}</p>
          <Link
            className='w-32 p-2 text-center bg-blue-500 text-white font-semibold rounded-lg hover:bg-orange-500'
            to='project'>
            View project
          </Link>
        </div>
        <div className='hidden w-full lg:block lg:max-w-[800px] lg:w-4/5'>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full w-full max-h-full object-cover rounded-lg'
            alt={alt}
          />
        </div>
      </div>
    </article>
  )
}
export default Project
