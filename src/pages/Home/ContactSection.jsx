import Form from '../../components/Form'
import letter from '../../assets/images/letter.png'
import Heading from '../../components/Heading'

function ContactHome() {
  return (
    <section
      id='contact'
      className='w-full py-32 flex justify-center overflow-x-hidden'>
      <div className='max-w-[650px] w-3/4 sm:w-2/3 flex flex-col items-center space-y-8'>
        <Heading title='Contact' />
        <div className='w-full flex flex-col items-center justify-between space-x-16 lg:flex-row lg:items-start'>
          <div className='w-full'>
            <p className='text-center font-semibold text-tertiary mb-4 lg:hidden'>
              daniel.l.babin@gmail.com
            </p>
            <Form />
          </div>
          <div className='w-1/3 hidden lg:block'>
            <div className='w-full lg:block'>
              <img className='max-w-full h-auto' src={letter} alt='letter' />
            </div>
            <p className='text-center font-semibold text-tertiary'>
              daniel.l.babin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactHome
