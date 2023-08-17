function Button({ children }) {
  return (
    <button className='w-full max-w-[200px] rounded-md border border-emerald p-3 font-semibold text-emerald duration-300 hover:translate-y-1 hover:border-emerald hover:bg-emerald hover:text-white'>
      {children}
    </button>
  )
}
export default Button
