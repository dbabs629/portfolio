import IconsList from './IconsList'

function Footer() {
  return (
    <footer>
      <section className='bg-darkest py-16 flex m-auto'>
        <div className='w-1/2 mx-auto grid grid-cols-2 text-primary'>
          <div className='w-full flex flex-col'>
            <h5 className='text-xl font-semibold'>Sections</h5>
            <ul className='font-semibold text-secondary'>
              <a href='/'>
                <li>Home</li>
              </a>
              <a href='#skills'>
                <li>Skills</li>
              </a>
              <a href='#projects'>
                <li>Projects</li>
              </a>
              <a href='#contact'>
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <div className='w-full text-2xl'>
            <h5 className='text-xl font-semibold'>Links</h5>
            <IconsList />
          </div>
          <div className=''>
            <span classNam='' />
            <p>
              Created 2023 by <br /> Daniel Babin
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
