import { useLocation } from 'react-router-dom'
import IconsList from './IconsList'

function Footer() {
  const location = useLocation()

  return (
    <footer>
      <section className='bg-darkest py-8 flex m-auto'>
        <div className='max-w-full w-3/4 mx-auto my-8 flex flex-col flex-wrap items-center justify-center space-y-8 text-primary'>
          {location.pathname === '/' && (
            <div className='max-w-[450px] w-full md:w-1/2 h-24 flex flex-col items-center space-y-4'>
              <h5 className='text-xl font-semibold'>Sections</h5>
              <ul className='max-w-[250px] w-2/3 mx-auto flex justify-center text-lg text-tertiary'>
                <a className='' href='/'>
                  <li className='w-20 text-center hover:text-xl hover:font-semibold duration-150'>
                    Home
                  </li>
                </a>
                <a className='' href='#about'>
                  <li className='w-20 text-center hover:text-xl hover:font-semibold duration-150'>
                    About
                  </li>
                </a>
                <a className='' href='#projects'>
                  <li className='w-20 text-center hover:text-xl hover:font-semibold duration-150'>
                    Projects
                  </li>
                </a>
                <a className='' href='#contact'>
                  <li className='w-20 text-center hover:text-xl hover:font-semibold duration-150'>
                    Contact
                  </li>
                </a>
              </ul>
            </div>
          )}
          <div className='max-w-[400px] w-full md:w-1/2 h-24 text-center text-3xl space-y-4'>
            <h5 className='text-xl font-semibold'>Links</h5>
            <div className='max-w-[200px] w-2/3 flex items-center mx-auto self-center'>
              <IconsList />
            </div>
          </div>
          <div className='w-full flex flex-col justify-center text-center space-y-8'>
            <span className='max-w-[500px] border-t-2 w-full self-center'></span>
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
