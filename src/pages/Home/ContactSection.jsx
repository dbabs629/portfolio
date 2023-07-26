import Form from '../../components/Form'
function ContactHome() {
  return (
    <section id='contact' className='h-screen flex items-center justify-center'>
      <div className='max-w-[650px] w-full flex flex-col items-center space-y-8'>
        <h2 className='text-4xl font-semibold text-primary underline decoration-orange-300 decoration-8 underline-offset-8'>
          Contact
        </h2>
        <p className='text-gray-800'>Send me a message</p>
        <div className='w-3/4'>
          <Form />
        </div>
      </div>
    </section>
  )
}
export default ContactHome
