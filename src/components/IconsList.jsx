import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

function IconsList() {
  return (
    <>
      <ul className='icons-list w-1/3 h-12 flex space-x-3 text-2xl text-white my-4'>
        <li className='relative w-8'>
          <a href='/'>
            <FontAwesomeIcon
              icon={faFile}
              className='text-red-400 hover:text-white duration-300 hover:scale-110'
            />
          </a>
          <div className='icon-text absolute text-xs -ml-2 bg-darker p-1 rounded-lg opacity-0'>
            Resume
          </div>
        </li>
        <li className='relative w-8'>
          <a href='#contact'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='text-yellow-400 hover:text-white duration-300 hover:scale-110'
            />
          </a>
          <div className='icon-text absolute text-xs -ml-2 bg-darker p-1 rounded-lg opacity-0'>
            Email
          </div>
        </li>
        <li className='relative w-8'>
          <a href='https://github.com/dbabs629/'>
            <FontAwesomeIcon
              icon={faGithub}
              className='text-gray-300 hover:text-white duration-300 hover:scale-110'
            />
          </a>
          <div className='icon-text absolute text-xs -ml-2 bg-darker p-1 rounded-lg opacity-0'>
            Github
          </div>
        </li>
        <li className='relative w-8'>
          <a href='https://www.linkedin.com/in/daniel-babin/'>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className='text-blue-400 hover:text-white duration-300 hover:scale-110'
            />
          </a>
          <div className='icon-text absolute text-xs -ml-2 bg-darker p-1 rounded-lg opacity-0'>
            LinkedIn
          </div>
        </li>
      </ul>
    </>
  )
}
export default IconsList
