import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

function IconsList() {
  return (
    <>
      <ul className='icons-list w-full flex text-white justify-between'>
        <li className='w-1/4 text-inherit flex flex-col items-center space-y-1'>
          <a href='/'>
            <FontAwesomeIcon
              icon={faFile}
              className='text-red-400 hover:text-white duration-300 hover:scale-110'
            />
          </a>
          <div className='icon-text text-xs bg-darker p-2 rounded-lg opacity-0 text-center'>
            Resume
          </div>
        </li>
        <li className='w-1/4 text-inherit flex flex-col items-center space-y-1'>
          <a href='#contact'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='text-yellow-400 hover:text-white duration-300 hover:scale-110'
            />
          </a>
          <div className='icon-text text-xs bg-darker p-2 rounded-lg opacity-0 text-center'>
            Email
          </div>
        </li>
        <li className='w-1/4 text-inherit flex flex-col items-center space-y-1'>
          <a href='https://github.com/dbabs629/'>
            <FontAwesomeIcon
              icon={faGithub}
              className='text-gray-300 hover:text-white duration-300 hover:scale-110'
            />
          </a>
          <div className='icon-text text-xs bg-darker p-2 rounded-lg opacity-0 text-center'>
            Github 
          </div>
        </li>
        <li className='w-1/4 text-inherit flex flex-col items-center space-y-1'>
          <a href='https://www.linkedin.com/in/daniel-babin/'>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className='text-blue-400 hover:text-white duration-300 hover:scale-110'
            />
          </a>
          <div className='icon-text text-xs bg-darker p-2 rounded-lg opacity-0 text-center'>
            LinkedIn
          </div>
        </li>
      </ul>
    </>
  )
}
export default IconsList
