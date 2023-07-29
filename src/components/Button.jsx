function Button({ children }) {
  return (
    <button className='max-w-[200px] w-full p-3 rounded-md border border-primary text-primary font-semibold hover:bg-secondary hover:border-none hover:text-white duration-300 ease-in-out'>
      {children}
    </button>
  )
}
export default Button
