import { useState } from 'react'
import DropDownMenu from './DropDownMenu'

function MobileMenu() {
  const [navBool, setnavBool] = useState(false)

  let navMenu = (e) => {
    !navBool ? setnavBool(true) : setnavBool(false)
  }
  return (
    <>
          <div
            id='mobile-menu'
            onClick={navMenu}
            className='flex flex-col p-1 justify-center items-end sm:hidden cursor-pointer space-y-1 duration-300 ease-in-out hover:scale-110'>
            <span className='block w-5 h-[0.2rem] rounded-full bg-white' />
            <span className='block w-6 h-[0.2rem] rounded-full bg-white' />
            <span className='block w-7 h-[0.2rem] rounded-full bg-white' />
          </div>
          <DropDownMenu navBool={navBool} setnavBool={setnavBool} />
        </>
  )
}
export default MobileMenu
