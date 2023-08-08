function Button({ children }) {
  return (
    <button className='max-w-[200px] w-full p-3 rounded-md border border-primary text-primary font-semibold hover:bg-tertdark hover:border-tertiary hover:text-white duration-500'>
      {children}
    </button>
  )
}
export default Button
