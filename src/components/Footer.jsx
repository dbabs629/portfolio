import IconsList from './IconsList'

function Footer() {
  return (
    <footer>
      <section className='bg-darkest py-8 flex m-auto'>
        <div className='max-w-full w-3/4 mx-auto my-8 flex flex-col flex-wrap items-center justify-center space-y-8 md:space-y-0 text-primary md:flex-row'>
          <div className='max-w-[450px] w-full md:w-1/2 h-24 flex flex-col items-center space-y-4'>
            <h5 className='text-xl font-semibold'>Sections</h5>
            <ul className='max-w-[250px] w-2/3 mx-auto flex justify-center text-lg space-x-6 text-tertiary'>
              <a className='hover:font-semibold' href='/'>
                <li>Home</li>
              </a>
              <a className='hover:font-semibold' href='#skills'>
                <li>Skills</li>
              </a>
              <a className='hover:font-semibold' href='#projects'>
                <li>Projects</li>
              </a>
              <a className='hover:font-semibold' href='#contact'>
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <div className='max-w-[400px] w-full md:w-1/2 h-24 text-center text-3xl space-y-4'>
            <h5 className='text-xl font-semibold'>Links</h5>
            <div className='max-w-[200px] w-2/3 flex items-center mx-auto self-center'>
              <IconsList />
            </div>
          </div>
          <div className='w-full flex flex-col justify-center text-center space-y-8'>
            <span className='max-w-[600px] border-t-2 w-full self-center md:mt-12'></span>
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
