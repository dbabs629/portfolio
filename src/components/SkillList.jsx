function SkillList({ list }) {
  return (
    <ul className='max-w-[450px] grid gap-1 grid-cols-3 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-2'>
      {list.map((item, i) => (
        <li
          key={i + 0.1}
          className='w-20 lg:w-24 p-2 xs:p-3 text-center capitalize text-xs rounded-3xl bg-dark text-primary shadow-md md:font-semibold'>
          {item}
        </li>
      ))}
    </ul>
  )
}
export default SkillList
