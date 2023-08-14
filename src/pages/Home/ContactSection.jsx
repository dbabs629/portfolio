import Form from '../../components/Form'
import letter from '../../assets/images/letter.png'
import Heading from '../../components/Heading'

function ContactHome() {
  return (
    <section
      id='contact'
      className='flex w-full justify-center overflow-x-hidden py-40'>
      <div className='flex w-3/4 max-w-[1050px] flex-col items-center space-y-8 sm:w-2/3 lg:w-4/5'>
        <Heading title='Contact' />
        <div className='flex w-full flex-col items-center justify-between space-x-16 lg:flex-row lg:items-start'>
          <Form />
          <div className='hidden w-full lg:block'>
            <div className='w-full max-w-[500px] lg:block'>
              <img className='h-auto max-w-full' src={letter} alt='letter' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactHome
