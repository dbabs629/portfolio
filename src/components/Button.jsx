function Button({ children }) {
  return (
    <button className='max-w-[200px] w-full p-3 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:border-primary hover:text-white duration-300 hover:translate-y-1 hover:scale-105'>
      {children}
    </button>
  )
}
export default Button
