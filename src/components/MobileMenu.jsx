import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import DropDownMenu from './DropDownMenu'

function MobileMenu({ page }) {
  const [navBool, setnavBool] = useState(false)

  let navMenu = (e) => {
    !navBool ? setnavBool(true) : setnavBool(false)
  }
  return (
    <div>
      {page === 'about' ? (
        <div>
          <div
            id='mobile-menu'
            onClick={navMenu}
            className='flex flex-col p-1 justify-center items-end sm:hidden cursor-pointer space-y-1 duration-300 ease-in-out hover:scale-110'>
            <span className='block w-5 h-[0.2rem] rounded-full bg-white' />
            <span className='block w-6 h-[0.2rem] rounded-full bg-white' />
            <span className='block w-7 h-[0.2rem] rounded-full bg-white' />
          </div>
          <DropDownMenu page={page} navBool={navBool} setnavBool={setnavBool} />
        </div>
      ) : (
        <div>
          <Link to={page}>
            <FontAwesomeIcon
              className='text-3xl cursor-pointer p-2 text-primary duration-300 ease-in-out hover:scale-110'
              icon={faHome}
            />
          </Link>
        </div>
      )}
    </div>
  )
}
export default MobileMenu
