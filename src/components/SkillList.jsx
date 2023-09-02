export default function SkillList({ list }) {
  return (
    <ul className='grid max-w-[475px] grid-cols-3 gap-4 sm:grid-cols-4'>
      {list.map((item, i) => (
        <li
          key={i + 0.1}
          className='w-20 rounded-3xl bg-dark p-2 text-center text-xs capitalize text-primary shadow-md xs:w-24 xs:p-3 sm:text-sm md:font-semibold'>
          {item}
        </li>
      ))}
    </ul>
  )
}
