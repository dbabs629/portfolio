import Form from '../../components/Form'
import letter from '../../assets/images/letter.png'
function ContactHome() {
  return (
    <section
      id='contact'
      className='w-full h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='max-w-[650px] w-2/3 flex flex-col items-center space-y-8'>
        <h2 className='max-w-full mb-16 text-4xl font-semibold text-primary underline decoration-orange-300 decoration-8 underline-offset-8'>
          Contact
        </h2>
        <div className='w-full flex flex-col items-center space-x-16 lg:flex-row lg:items-start'>
          <div className='w-full'>
            <p className='text-center font-semibold text-secondary mb-4 lg:hidden'>
              daniel.l.babin@gmail.com
            </p>
            <Form />
          </div>
          <div className='w-1/3 hidden lg:block'>
            <div className='w-full lg:block'>
              <img className='max-w-full h-auto' src={letter} alt='letter' />
            </div>
            <p className='text-center font-semibold text-secondary'>
              daniel.l.babin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactHome
