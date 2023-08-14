import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'

function IconsList() {
  return (
    <div className='w-full text-2xl sm:max-w-[100px] sm:text-3xl sm:fixed sm:right-0 sm:bottom-0 sm:pt-2 sm:pb-12'>
      <ul className='icons-list max-w-full flex text-white sm:flex-col sm:space-y-10'>
        <li className='w-full flex flex-col items-center space-y-8 sm:space-y-10 text-yellow-400 hover:text-white duration-300 hover:-translate-y-1'>
          <a href='/'>
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <p className='absolute icon-text text-xs bg-darker text-white p-1 sm:p-2 rounded-lg sm:opacity-0 mx-auto'>
            Resume
          </p>
        </li>
        <li className='w-full flex flex-col items-center space-y-8 sm:space-y-10 text-red-400 hover:text-white duration-300 hover:-translate-y-1'>
          <a href='#contact'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p className='absolute icon-text text-xs bg-darker text-white p-1 sm:p-2 rounded-lg sm:opacity-0 mx-auto'>
            Email
          </p>
        </li>
        <li className='w-full flex flex-col items-center space-y-8 sm:space-y-10 text-gray-300 hover:text-white duration-300 hover:-translate-y-1'>
          <a href='https://github.com/dbabs629/'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p className='absolute icon-text text-xs bg-darker text-white p-1 sm:p-2 rounded-lg sm:opacity-0 mx-auto'>
            Github
          </p>
        </li>
        <li className='w-full flex flex-col items-center space-y-8 sm:space-y-10 text-blue-400 hover:text-white duration-300 hover:-translate-y-1'>
          <a href='https://www.linkedin.com/in/daniel-babin/'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <p className='absolute icon-text text-xs bg-darker text-white p-1 sm:p-2 rounded-lg sm:opacity-0 mx-auto'>
            LinkedIn
          </p>
        </li>
      </ul>
    </div>
  )
}
export default IconsList
