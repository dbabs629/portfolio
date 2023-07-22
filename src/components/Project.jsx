import { Link } from 'react-router-dom'
import LoadImg from './LoadImg'

function Project({ title, text, projectLowResImg, projectHighResImg, alt }) {
  return (
    <article className='border flex flex-col md:flex-row'>
      <div className='md:hidden'>
        <LoadImg
          imgLowRes={projectLowResImg}
          imgHighRes={projectHighResImg}
          addClassName='max-w-full object-cover rounded-lg'
          alt={alt}
        />
      </div>
      <div className='flex flex-col'>
        <h3 className='text-3xl text-primary'>{title}</h3>
        <p className='text-gray-800'>{text}</p>
        <Link
          className='w-32 p-2 text-center bg-blue-500 text-white font-semibold rounded-lg hover:bg-orange-500'
          to='project'>
          View project
        </Link>
      </div>
      <div className='hidden md:block'>
        <LoadImg
          imgLowRes={projectLowResImg}
          imgHighRes={projectHighResImg}
          addClassName='max-w-full object-cover rounded-lg'
          alt={alt}
        />
      </div>
    </article>
  )
}
export default Project
