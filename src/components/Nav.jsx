function Nav({ page }) {
  return (
    <div className='navbar absolute w-full mt-6'>
      <div className='w-full flex items-center mx-auto justify-around'>
        <h2 className='w-1/4 text-xl text-gray-300'>Daniel Babin</h2>
        <ul className='w-2/3 flex flex-row gap-6 justify-end self-end'>
          <a
            href={page}
            className='border-blue-400 text-primary font-semibold duration-300 underline-offset-8 decoration-primary hover:scale-105 hover:text-white hover:underline capitalize'>
            <li>{page === '/' ? 'Home' : page}</li>
          </a>
          <a
            href='#skills'
            className='border-blue-400 text-primary font-semibold transition-transform duration-150 underline-offset-8 decoration-primary hover:scale-105 hover:text-white hover:underline'>
            <li>Skills</li>
          </a>
          <a
            href='#projects'
            className='border-blue-400 text-primary font-semibold duration-300 underline-offset-8 decoration-primary hover:scale-105 hover:text-white hover:underline'>
            <li>Projects</li>
          </a>
          <a
            href='#contact'
            className='border-blue-400 text-primary font-semibold duration-300 underline-offset-8 decoration-primary hover:scale-105 hover:text-white hover:underline'>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  )
}
export default Nav
