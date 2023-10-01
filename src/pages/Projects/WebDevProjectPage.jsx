import { useRef } from 'react'
import Heading from '../../components/Heading'
import Slider from '../../components/Slider'
import SkillList from '../../components/SkillList'
import projectWebdevLowResImg from '../../assets/images/webdev-mocksite-low-1.jpg'
import projectWebdevHighResImg from '../../assets/images/webdev-mocksite-high-2.png'
import useObserver from '../../components/useObserver'

function WebDevProjectPage() {
  let skillList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TailwindCSS',
    'NPM',
    'Git',
  ]
  let altImgList = ['alt 1', 'alt 2', 'alt 3']
  let projectLowResImgs = [projectWebdevLowResImg]
  let projectHighResImgs = [projectWebdevHighResImg]
  let textList = [
    'text 1',
    'text 2',
    'text 3',
    'text 4',
    'text 5',
    'text 6',
    'text 7',
    'text 8',
  ]

  const projectRef = useRef()
  useObserver(projectRef)

  return (
    <article
      ref={projectRef}
      className='mx-auto flex w-4/5 max-w-[450px] flex-col items-center space-y-8 lg:max-w-[700px]'>
      <div className='mx-auto w-72 pt-32'>
        <Heading title='About Page' />
      </div>
      <div className='hide hide-left'>
        <Slider
          imgHighResList={projectHighResImgs}
          imgLowResList={projectLowResImgs}
          alt={altImgList}
          link='https://daniel-babin-rps-game.netlify.app/'
        />
      </div>
      <div className='hide hide-right self-start'>
        <SkillList list={skillList} />
      </div>
      <div>
        <p className='hide hide-right text-primary lg:text-lg'>{textList}</p>
      </div>
    </article>
  )
}
export default WebDevProjectPage
