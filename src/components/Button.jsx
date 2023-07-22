function Button({ name }) {
  return (
    <button className='w-2/3 p-3 rounded-3xl bg-dark text-primary hover:bg-darker'>
      {name}
    </button>
  )
}
export default Button
