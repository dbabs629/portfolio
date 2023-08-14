function SkillList({ list }) {
  return (
    <ul className='max-w-[450px] grid gap-2 grid-cols-3 lg:grid-cols-4 lg:gap-3 xl:gap-4'>
      {list.map((item, i) => (
        <li
          key={i + 0.1}
          className='w-20 p-2 text-center capitalize text-xs rounded-3xl bg-dark text-primary shadow-md xs:w-24 xs:p-3 sm:text-sm md:font-semibold'>
          {item}
        </li>
      ))}
    </ul>
  )
}
export default SkillList
