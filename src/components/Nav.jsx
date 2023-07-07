function Nav() {
  return (
    <div className='absolute w-full bg-white'>
      <div className='flex flex-row'>
        <div>Daniel Babin</div>
        <div>
          <ul className='flex flex-row'>
            <a href='/' className='border-b border-primary'>
              <li>Link</li>
            </a>
            <a href='/' className='border-b border-primary'>
              <li>Link</li>
            </a>
            <a href='/' className='border-b border-primary'>
              <li>Link</li>
            </a>
            <a href='/' className='border-b border-primary'>
              <li>Link</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Nav
