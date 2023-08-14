import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function DropDownMenu({ navBool, setnavBool }) {
  const [dropDown, setdropDown] = useState('hidden')

  let navMenu = (e) => {
    !navBool ? setnavBool(true) : setnavBool(false)
  }

  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 150) setnavBool(false)
  })

  useEffect(() => {
    navBool === true
      ? setdropDown('transform translate-x-[0px] opacity-100 duration-700')
      : setdropDown(
          'hidden transform translate-x-[20rem] opacity-0 duration-700'
        )
  }, [navBool])

  return (
    <div
      className={`${dropDown} z-20 absolute top-0 right-0 w-full flex flex-col bg-dark rounded-bl-lg sm:hidden`}>
      <ul className='drop-down relative w-full flex flex-col text-white items-center justify-center space-y-4 py-4'>
        <li
          className='cursor-pointer w-40 bg-darker rounded-full text-center py-4 hover:bg-red-500 active:bg-red-500'
          onClick={navMenu}>
          <FontAwesomeIcon
            className='text-3xl duration-300 ease-in-out'
            icon={faCircleXmark}
          />
        </li>
        <a
          className='w-40 bg-darker rounded-full text-sm text-white font-semibold duration-300 hover:bg-secondary active:bg-secondary
[&>*]:hover:scale-110 capitalize text-center py-5'
          href='#about'>
          <li>About</li>
        </a>
        <a
          className='w-40 bg-darker rounded-full text-sm text-white font-semibold duration-300 hover:bg-secondary active:bg-secondary
[&>*]:hover:scale-110 capitalize text-center py-5'
          href='#projects'>
          <li>Projects</li>
        </a>
        <a
          className='w-40 bg-darker rounded-full text-sm text-white font-semibold duration-300 hover:bg-secondary active:bg-secondary
[&>*]:hover:scale-110 capitalize text-center py-5'
          href='#contact'>
          <li>Contact</li>
        </a>
        <a
          className='w-40 bg-darker rounded-full text-sm text-white font-semibold duration-300 hover:bg-secondary active:bg-secondary
[&>*]:hover:scale-110 capitalize text-center py-5'
          href='/'>
          <li>View Resume</li>
        </a>
        <a
          className='w-40 bg-darker rounded-full text-sm text-white font-semibold duration-300 hover:bg-secondary active:bg-secondary
[&>*]:hover:scale-110 capitalize text-center py-5'
          href='#contact'>
          <li>Email Me</li>
        </a>
        <a
          className='w-40 bg-darker rounded-full text-sm text-white font-semibold duration-300 hover:bg-secondary active:bg-secondary
[&>*]:hover:scale-110 capitalize text-center py-5'
          href='https://github.com/dbabs629/'>
          <li>Github</li>
        </a>
        <a
          className='w-40 bg-darker rounded-full text-sm text-white font-semibold duration-300 hover:bg-secondary active:bg-secondary
[&>*]:hover:scale-110 capitalize text-center py-5'
          href='https://www.linkedin.com/in/daniel-babin/'>
          <li>LinkedIn</li>
        </a>
      </ul>
    </div>
  )
}
export default DropDownMenu
