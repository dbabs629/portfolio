import { Link } from 'react-router-dom'
import LoadImg from './LoadImg'

function Project({ title, text, projectLowResImg, projectHighResImg, alt }) {
  return (
    <div className='w-full flex justify-center border-2'>
      <div className='flex flex-col sm:w-full border-2'>
        <h3 className='text-3xl text-primary'>{title}</h3>
        <p className='text-gray-800'>{text}</p>
        <Link
          className='w-32 p-2 text-center bg-blue-500 text-white font-semibold rounded-lg hover:bg-orange-500'
          to='project'>
          View project
        </Link>
      </div>
      <div className='w-full border'>
        <LoadImg
          imgLowRes={projectLowResImg}
          imgHighRes={projectHighResImg}
          addClassName='max-w-full w-full max-h-full object-cover rounded-lg'
          alt={alt}
        />
      </div>
    </div>
  )
}
export default Project
