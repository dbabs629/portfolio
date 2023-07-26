import IconsList from './IconsList'

function Footer() {
  return (
    <footer>
      <section className='bg-darkest py-16 flex m-auto'>
        <div className='grid grid-cols-2 space-x-12 mx-auto text-primary'>
          <div>
            <p className=''>Created 2023 by <br/> Daniel Babin</p>
            <IconsList />
          </div>
          <div>
            <h5 className='text-2xl font-semibold'>Sections</h5>
            <ul className='grid grid-cols-2 font-semibold text-secondary'>
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
        </div>
      </section>
    </footer>
  )
}
export default Footer
