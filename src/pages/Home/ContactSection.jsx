import Form from '../../components/Form'
function ContactHome() {
  return (
    <section id='contact' className='h-screen flex items-center'>
      <div className='flex flex-col space-y-8'>
        <h2 className='text-3xl text-primary'>Contact</h2>
        <Form />
      </div>
    </section>
  )
}
export default ContactHome
