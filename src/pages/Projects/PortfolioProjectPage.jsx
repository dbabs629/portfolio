import { useRef } from 'react'
import Heading from '../../components/Heading'
import Slider from '../../components/Slider'
import SkillList from '../../components/SkillList'
import projectLowResImg from '../../assets/images/portfolio-low-1.jpg'
import projectHighResImg from '../../assets/images/portfolio-high-2.PNG'
import useObserver from '../../components/useObserver'

function PortfolioProjectPage() {
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
  let textList = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6']
  let projectLowResImgs = [projectLowResImg]
  let projectHighResImgs = [projectHighResImg]

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
          imgLowResList={projectLowResImgs}
          imgHighResList={projectHighResImgs}
          alt={altImgList}
          link='https://daniel-babin-portfolio.netlify.app/'
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
export default PortfolioProjectPage
