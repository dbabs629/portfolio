function Button({ children }) {
  return (
    <button className='max-w-[150px] w-full p-3 rounded-xl bg-secdark text-white font-semibold hover:scale-105 hover:bg-primary'>
      {children}
    </button>
  )
}
export default Button
