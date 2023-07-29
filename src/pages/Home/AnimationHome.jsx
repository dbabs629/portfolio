import { useState } from 'react'
function AnimationHome() {
  const [textPosition, setTextPosition] = useState(0)
  const [textDelay, setTextDelay] = useState(1)

  let skillsList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.JS',
    'Next.JS',
    'TypeScript',
    'Node.JS',
    'Express',
    'Firebase',
    'Mongodb',
    'Git',
    'Figma',
  ]

  // setInterval(() => {
  //   skillsList.forEach((item, i) => {
  //     setTextPosition(Math.floor(Math.random() * (12 - 1 + 1) + 1))
  //     console.log(item, textPosition)
  //   })
  // }, 4000)

  let risingText = skillsList.map((item, i) => {
    // setTextDelay(Math.floor(Math.random() * (12 - 1 + 1) + 1) * 100)

    return (
      <span
        key={i}
        className={`text-xs w-16 -skew-y-12 transition-all opacity-50 duration-300 ease-in-out hover:-translate-y-24`}>
        {item}
      </span>
    )
  })

  return (
    <span className='absolute bottom-0 self-end w-full h-24 transition-opacity duration-300 bg-gradient-to-t from-white to-60% to-transparent'>
      <span className='relative w-full flex text-center text-white'>
        {risingText}
      </span>
    </span>
  )
}
export default AnimationHome
