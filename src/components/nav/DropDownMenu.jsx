import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import resume from '../../assets/daniel-babin-resume-2023.pdf'

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
          'hidden transform -translate-y-[20rem] opacity-0 duration-700'
        )
  }, [navBool])

  return (
    <div
      className={`${dropDown} absolute right-0 top-0 z-20 flex w-full flex-col rounded-bl-lg bg-dark sm:hidden`}>
      <ul className='drop-down relative flex w-full flex-col items-center justify-center space-y-4 py-4 text-white'>
        <li
          className='absolute right-0 top-0 m-6 cursor-pointer rounded-full bg-darker text-center'
          onClick={navMenu}>
          <FontAwesomeIcon
            className='text-3xl text-rose-500 duration-300 ease-in-out'
            icon={faCircleXmark}
          />
        </li>
        <a
          className='w-40 rounded-full bg-darker py-5 text-center text-sm font-semibold capitalize text-white
duration-300 hover:bg-secondary active:bg-secondary'
          href='#hero'>
          <li>Home</li>
        </a>
        <a
          className='w-40 rounded-full bg-darker py-5 text-center text-sm font-semibold capitalize text-white
duration-300 hover:bg-secondary active:bg-secondary'
          href='#about'>
          <li>About</li>
        </a>
        <a
          className='w-40 rounded-full bg-darker py-5 text-center text-sm font-semibold capitalize text-white
duration-300 hover:bg-secondary active:bg-secondary'
          href='#projects'>
          <li>Projects</li>
        </a>
        <a
          className='w-40 rounded-full bg-darker py-5 text-center text-sm font-semibold capitalize text-white
duration-300 hover:bg-secondary active:bg-secondary'
          href='#contact'>
          <li>Contact</li>
        </a>
        <a
          className='w-40 rounded-full bg-darker py-5 text-center text-sm font-semibold capitalize text-white
duration-300 hover:bg-secondary active:bg-secondary'
          href={resume}
          rel='noopener noreferrer'
          target='_blank'>
          <li>View Resume</li>
        </a>
        <a
          className='w-40 rounded-full bg-darker py-5 text-center text-sm font-semibold capitalize text-white
duration-300 hover:bg-secondary active:bg-secondary'
          href='#contact'>
          <li>Email Me</li>
        </a>
        <a
          className='w-40 rounded-full bg-darker py-5 text-center text-sm font-semibold capitalize text-white
duration-300 hover:bg-secondary active:bg-secondary'
          href='https://github.com/dbabs629/'>
          <li>Github</li>
        </a>
        <a
          className='w-40 rounded-full bg-darker py-5 text-center text-sm font-semibold capitalize text-white
duration-300 hover:bg-secondary active:bg-secondary'
          href='https://www.linkedin.com/in/daniel-babin/'>
          <li>LinkedIn</li>
        </a>
      </ul>
    </div>
  )
}
export default DropDownMenu
