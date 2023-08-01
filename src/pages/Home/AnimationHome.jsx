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
        className={`animation-move-sm w-20 h-10 cursor-pointer text-xs`}>
        {item}
      </span>
    )
  })

  return (
    <span className='absolute bottom-0 max-w-full w-full h-24 transition-opacity bg-gradient-to-t from-white to-60% to-transparent'>
      <span className='relative w-5/6 mx-auto py-10 flex justify-between text-center text-white'>
        {risingText}
      </span>
    </span>
  )
}
export default AnimationHome
