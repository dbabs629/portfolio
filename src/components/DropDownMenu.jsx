import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function DropDownMenu({ page, navBool, setnavBool }) {
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
          'invisible transform translate-x-[20rem] opacity-0 duration-700'
        )
  }, [navBool])

  return (
    <div
      className={`${dropDown} absolute top-0 right-0 w-1/3 flex flex-col bg-dark rounded-bl-lg sm:hidden`}>
      <div
        className='cursor-pointer border w-full text-center p-4 hover:bg-red-500 active:bg-red-500 [&>*]:text-white [&>*]:hover:scale-110'
        onClick={navMenu}>
        <FontAwesomeIcon
          className='text-3xl duration-300 ease-in-out'
          icon={faCircleXmark}
        />
      </div>
      <ul className='drop-down relative w-full flex flex-col text-white items-center'>
        <Link
          to={page}
          className='text-white font-semibold duration-300 hover:bg-blue-500 active:bg-blue-500
[&>*]:hover:scale-110 capitalize border w-full text-center p-4'>
          <li>{page === '/' ? 'Home' : page}</li>
        </Link>
        <a
          className='text-white font-semibold duration-300 hover:bg-blue-500 active:bg-blue-500
[&>*]:hover:scale-110 capitalize border w-full text-center p-4'
          href='#skills'>
          <li>Skills</li>
        </a>
        <a
          className='text-white font-semibold duration-300 hover:bg-blue-500 active:bg-blue-500
[&>*]:hover:scale-110 capitalize border w-full text-center p-4'
          href='#projects'>
          <li>Projects</li>
        </a>
        <a
          className='text-white font-semibold duration-300 hover:bg-blue-500 active:bg-blue-500
[&>*]:hover:scale-110 capitalize border w-full text-center p-4'
          href='#contact'>
          <li>Contact</li>
        </a>
      </ul>
    </div>
  )
}
export default DropDownMenu
