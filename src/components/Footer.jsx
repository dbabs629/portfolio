function Footer() {
  return (
    <footer>
      <section className='bg-darkest py-8 flex m-auto'>
        <div className='max-w-full w-3/4 mx-auto my-8 flex flex-col flex-wrap items-center justify-center space-y-8 text-primary'>
          <div className='max-w-[400px] w-full md:w-1/2 h-24 text-center text-3xl space-y-4'></div>
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
