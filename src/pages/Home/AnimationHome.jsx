// import { useState } from 'react'
function AnimationHome() {
  // const [textPosition, setTextPosition] = useState(0)
  // const [textDelay, setTextDelay] = useState(1)

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
        className={`animation-move-sm max-w-xs w-2 cursor-pointer text-xs overflow-x-hidden`}>
        {item}
      </span>
    )
  })

  return (
    <span className='max-w-full w-4/5 -z-0 flex text-center text-white overflow-x-hidden'>
      {risingText}
    </span>
  )
}
export default AnimationHome
