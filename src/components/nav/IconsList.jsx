import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import resume from '../../assets/daniel-babin-resume-2023.pdf'

function IconsList() {
  return (
    <div className='z-10 w-full overflow-x-hidden text-2xl sm:fixed sm:bottom-0 sm:right-0 sm:max-w-[100px] sm:pb-12 sm:pt-2 sm:text-3xl'>
      <ul className='icons-list flex max-w-full text-white sm:flex-col sm:space-y-10'>
        <li className='flex w-full flex-col items-center space-y-8 text-emerald duration-300 hover:-translate-y-1 hover:text-white sm:space-y-10'>
          <a href={resume} download>
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <p className='icon-text absolute mx-auto rounded-lg bg-darker p-1 text-xs text-white sm:p-2 sm:opacity-0'>
            Resume
          </p>
        </li>
        <li className='flex w-full flex-col items-center space-y-8 text-red duration-300 hover:-translate-y-1 hover:text-white sm:space-y-10'>
          <a href='mailto:daniel.l.babin@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p className='icon-text absolute mx-auto rounded-lg bg-darker p-1 text-xs text-white sm:p-2 sm:opacity-0'>
            Email
          </p>
        </li>
        <li className='flex w-full flex-col items-center space-y-8 text-stone-200 duration-300 hover:-translate-y-1 hover:text-white sm:space-y-10'>
          <a href='https://github.com/dbabs629/'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p className='icon-text absolute mx-auto rounded-lg bg-darker p-1 text-xs text-white sm:p-2 sm:opacity-0'>
            Github
          </p>
        </li>
        <li className='flex w-full flex-col items-center space-y-8 text-blue-400 duration-300 hover:-translate-y-1 hover:text-white sm:space-y-10'>
          <a href='https://www.linkedin.com/in/daniel-babin/'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <p className='icon-text absolute mx-auto rounded-lg bg-darker p-1 text-xs text-white sm:p-2 sm:opacity-0'>
            LinkedIn
          </p>
        </li>
      </ul>
    </div>
  )
}
export default IconsList
