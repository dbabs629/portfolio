import { useState } from 'react'
function AnimationHome() {
  const [textPosition, setTextPosition] = useState(0)

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
  //   setTextPosition(Math.floor(Math.random() * (12 - 1 + 1) + 1))
  //   console.log('Interval', textPosition)
  // }, 4000)

  let risingText = skillsList.map((item, i) => {
    return (
      <span key={i} className={`absolute w-full border border-blue-400`}>
        {item}
      </span>
    )
  })

  return (
    <span className='absolute bottom-0 self-end w-full h-24 transition-opacity duration-300 bg-gradient-to-t from-white to-60% to-transparent text-white'>
      <span className='relative w-full flex text-center border border-red-400'>
        {risingText}
      </span>
    </span>
  )
}
export default AnimationHome
