import { Link } from 'react-router-dom'
import LoadImg from './LoadImg'

function Project({ title, text, projectLowResImg, projectHighResImg, alt }) {
  return (
    <div className='w-full lg:h-screen flex items-center'>
      <div className='max-w-[500px] lg:max-w-[1000px] w-full flex flex-col items-center mx-auto lg:flex-row my-16 lg:space-x-8 lg:space-y-0 lg'>
        <div className='lg:hidden w-full'>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full w-full max-h-full object-cover rounded-lg'
            alt={alt}
          />
        </div>
        <div className='w-full flex flex-col space-y-8 sm:w-full'>
          <h3 className='text-3xl text-primary'>{title}</h3>
          <p className='text-gray-800'>{text}</p>
          <Link
            className='w-32 p-2 text-center bg-blue-500 text-white font-semibold rounded-lg hover:bg-orange-500'
            to='project'>
            View project
          </Link>
        </div>
        <div className='hidden w-full lg:block lg:max-w-[800px]'>
          <LoadImg
            imgLowRes={projectLowResImg}
            imgHighRes={projectHighResImg}
            addClassName='max-w-full w-full max-h-full object-cover rounded-lg'
            alt={alt}
          />
        </div>
      </div>
    </div>
  )
}
export default Project
