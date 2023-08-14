function Footer() {
  return (
    <footer>
      <section className='m-auto flex bg-darkest py-8'>
        <div className='mx-auto my-8 flex w-3/4 max-w-full flex-col flex-wrap items-center justify-center space-y-8 text-primary'>
          <div className='h-24 w-full max-w-[400px] space-y-4 text-center text-3xl md:w-1/2'></div>
          <div className='flex w-full flex-col justify-center space-y-8 text-center'>
            <span className='w-full max-w-[500px] self-center border-t-2'></span>
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
