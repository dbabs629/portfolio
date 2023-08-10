function SkillList({ list }) {
  return (
    <ul className='max-w-[450px] grid gap-1 grid-cols-3 lg:grid-cols-4 lg:gap-2'>
      {list.map((item, i) => (
        <li
          key={i + 0.1}
          className='w-24 p-2 text-center capitalize text-xs rounded-3xl bg-darkest text-primary shadow-md xs:w-24 xs:p-3 md:font-semibold'>
          {item}
        </li>
      ))}
    </ul>
  )
}
export default SkillList
