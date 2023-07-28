import IconsList from './IconsList'

function Footer() {
  return (
    <footer>
      <section className='bg-darkest py-8 flex m-auto'>
        <div className='w-full mx-auto flex flex-col flex-wrap items-center justify-center gap-8 text-primary xs:flex-row'>
          <div className='w-40 flex flex-col'>
            <h5 className='text-xl font-semibold py-4'>Sections</h5>
            <ul className='w-full basis-100 shrink-0 grow-0 grid grid-cols-2 text-secondary'>
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
          <div className='w-40 basis-100 shrink-0 grow-0 text-2xl'>
            <h5 className='text-xl font-semibold py-4'>Links</h5>
            <IconsList />
          </div>
          <div className='w-full flex flex-col justify-center text-center pt-8'>
            <span className='border-t-2 w-1/2 self-center pb-4'></span>
            <p className='font-thin'>
              @ 2023 Created by <br /> Daniel Babin
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
