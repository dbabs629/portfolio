import IconsList from './IconsList'

function Footer() {
  return (
    <footer>
      <section className='bg-darkest flex m-auto'>
        <div className='self-center py-16'>
          <h1 className='text-3xl text-primary'>Footer</h1>
          <h5 className='text-primary'>Links</h5>
          <IconsList />
        </div>
      </section>
    </footer>
  )
}
export default Footer
