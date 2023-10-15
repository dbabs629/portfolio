export default function SkillList({ list }) {
  return (
    <ul className='flex w-full flex-wrap gap-2 justify-center'>
      {list.map((item, i) => (
        <li
          key={i + 0.1}
          className='w-20 rounded-3xl bg-dark p-2 text-center text-xs capitalize text-primary shadow-md xs:w-24 xs:p-3 xs:text-sm md:font-semibold'>
          {item}
        </li>
      ))}
    </ul>
  )
}
