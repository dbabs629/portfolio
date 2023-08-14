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
        className='flex cursor-pointer flex-col items-end justify-center space-y-1 p-1 duration-300 ease-in-out hover:scale-110 sm:hidden'>
        <span className='block h-[0.2rem] w-5 rounded-full bg-white' />
        <span className='block h-[0.2rem] w-6 rounded-full bg-white' />
        <span className='block h-[0.2rem] w-7 rounded-full bg-white' />
      </div>
      <DropDownMenu navBool={navBool} setnavBool={setnavBool} />
    </>
  )
}
export default MobileMenu
