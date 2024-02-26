import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import resume from '../assets/daniel-babin-frontend-developer-resume.pdf'

function IconsList() {
  return (
    <div className='fixed bottom-0 right-0 z-10 w-full max-w-[10%] pb-10 pt-2 text-2xl sm:text-3xl'>
      <ul className='icons-list flex max-w-full flex-col space-y-6 text-white sm:space-y-10'>
        <li className='flex w-full flex-col items-center space-y-8 text-emerald duration-300 hover:-translate-y-1 hover:text-white sm:space-y-10'>
          <a name='Download Resume' href={resume} download>
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <p className='icon-text absolute mx-auto rounded-lg bg-darker p-1 text-xs text-white opacity-0 sm:p-2'>
            Resume
          </p>
        </li>
        <li className='flex w-full flex-col items-center space-y-8 text-red duration-300 hover:-translate-y-1 hover:text-white sm:space-y-10'>
          <a name='Contact' href='#contact'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p className='icon-text absolute mx-auto rounded-lg bg-darker p-1 text-xs text-white opacity-0 sm:p-2'>
            Email
          </p>
        </li>
        <li className='flex w-full flex-col items-center space-y-8 text-stone-200 duration-300 hover:-translate-y-1 hover:text-white sm:space-y-10'>
          <a name='GitHub Repository Link' href='https://github.com/dbabs629/'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p className='icon-text absolute mx-auto rounded-lg bg-darker p-1 text-xs text-white opacity-0 sm:p-2'>
            Github
          </p>
        </li>
        <li className='flex w-full flex-col items-center space-y-8 text-blue-400 duration-300 hover:-translate-y-1 hover:text-white sm:space-y-10'>
          <a name='LinkedIn Profile Link' href='https://www.linkedin.com/in/daniel-babin/'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <p className='icon-text absolute mx-auto rounded-lg bg-darker p-1 text-xs text-white opacity-0 sm:p-2'>
            LinkedIn
          </p>
        </li>
      </ul>
    </div>
  )
}
export default IconsList
