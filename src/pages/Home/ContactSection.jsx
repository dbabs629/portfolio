import Form from '../../components/Form'
import letter from '../../assets/images/letter.png'
import Heading from '../../components/Heading'

function ContactHome() {
  return (
    <section
      id='contact'
      className='w-full py-40 flex justify-center overflow-x-hidden'>
      <div className='max-w-[1050px] w-3/4 flex flex-col items-center space-y-8 sm:w-2/3 lg:w-4/5'>
        <Heading title='Contact' />
        <div className='w-full flex flex-col items-center justify-between space-x-16 lg:flex-row lg:items-start'>
          <Form />
          <div className='w-full hidden lg:block'>
            <div className='max-w-[500px] w-full lg:block'>
              <img className='max-w-full h-auto' src={letter} alt='letter' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactHome
