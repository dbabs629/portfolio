import IconsList from './IconsList'

function Footer() {
  return (
    <footer>
      <section className='bg-darkest h-screen flex m-auto'>
        <div className='self-center'>
          <h1 className='text-3xl text-primary'>Footer</h1>
          <IconsList />
        </div>
      </section>
    </footer>
  )
}
export default Footer
