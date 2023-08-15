import MobileMenu from './MobileMenu'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import IconsList from './IconsList'
import Button from '../Button'
import resume from '../../assets/daniel-babin-resume-2023.pdf'

function Nav() {
  const { pathname } = useLocation()

  return (
    <div className='navbar fixed z-20 w-full max-w-full border-b-2 border-b-dark bg-darkest'>
      <div className='relative mx-auto flex w-full items-center justify-between p-4 xs:px-16'>
        <h2 className='w-full text-2xl font-bold text-red'>Daniel Babin</h2>
        {pathname === '/' ? (
          <div className=''>
            <ul className='hidden w-full flex-row items-center gap-6 sm:flex'>
              <a
                href='#hero'
                className='font-semibold text-primary decoration-primary underline-offset-8 transition-transform duration-150 hover:scale-105 hover:text-white hover:underline'>
                <FontAwesomeIcon
                  className='cursor-pointer p-2 text-2xl text-primary duration-300 ease-in-out hover:scale-110'
                  icon={faHome}
                />
              </a>
              <a
                href='#about'
                className='font-semibold text-primary decoration-primary underline-offset-8 transition-transform duration-150 hover:scale-105 hover:text-white hover:underline'>
                <li>About</li>
              </a>
              <a
                href='#projects'
                className='font-semibold text-primary decoration-primary underline-offset-8 duration-300 hover:scale-105 hover:text-white hover:underline'>
                <li>Projects</li>
              </a>
              <a
                href='#contact'
                className='font-semibold text-primary decoration-primary underline-offset-8 duration-300 hover:scale-105 hover:text-white hover:underline'>
                <li>Contact</li>
              </a>
              <a href={resume} rel='noopener noreferrer' target='_blank'>
                <Button>Resume</Button>
              </a>
            </ul>
            <MobileMenu />
            <div className='hidden sm:block'>
              <IconsList />
            </div>
          </div>
        ) : (
          <div>
            <Link to='/'>
              <FontAwesomeIcon
                className='cursor-pointer p-2 text-3xl text-primary duration-300 ease-in-out hover:scale-110'
                icon={faHome}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
export default Nav
