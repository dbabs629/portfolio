import MobileMenu from './MobileMenu'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const {pathname} = useLocation()
  
  return (
    <div className='navbar absolute max-w-full w-full'>
      <div className='relative w-full flex items-center mx-auto justify-between px-8 xs:px-16 py-8'>
        <h2 className='w-full text-2xl font-bold text-tertiary'>
          Daniel Babin
        </h2>
        {pathname === '/' ? (
          <div>
            <ul className='hidden w-full flex-row gap-6 justify-end self-end sm:flex'>
              <a
                href='#about'
                className='text-primary font-semibold transition-transform duration-150 underline-offset-8 decoration-primary hover:scale-105 hover:text-white hover:underline'>
                <li>About</li>
              </a>
              <a
                href='#projects'
                className='text-primary font-semibold duration-300 underline-offset-8 decoration-primary hover:scale-105 hover:text-white hover:underline'>
                <li>Projects</li>
              </a>
              <a
                href='#contact'
                className='text-primary font-semibold duration-300 underline-offset-8 decoration-primary hover:scale-105 hover:text-white hover:underline'>
                <li>Contact</li>
              </a>
            </ul>
            <MobileMenu />
          </div>
        ) : (
          <div>
            <Link to='/'>
              <FontAwesomeIcon
                className='text-3xl cursor-pointer p-2 text-primary duration-300 ease-in-out hover:scale-110'
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
