import { useRef, useState } from 'react'
import Heading from '../../components/Heading'
import SkillList from '../../components/SkillList'
import ImgSlider from '../../components/ImgSlider'
import useObserver from '../../components/useObserver'

function ProjectPage({
  link,
  title,
  altImgList,
  projectHighResImgs,
  projectLowResImgs,
  skillList,
  textList,
}) {
  const [showText, setShowText] = useState(false)

  const projectRef = useRef()
  useObserver(projectRef)

  let handleClick = () => {
    !showText ? setShowText(true) : setShowText(false)
  }

  return (
    <article
      ref={projectRef}
      className='mx-auto flex w-4/5 max-w-full flex-col items-center justify-center space-y-8 overflow-hidden lg:w-4/5 lg:max-w-[1050px]'>
      <div className='mx-auto w-full pt-32'>
        <Heading title={title} />
      </div>
      <div className='w-full'>
        <ImgSlider
          imgHighResList={projectHighResImgs}
          imgLowResList={projectLowResImgs}
          alt={altImgList}
          link={link}
        />
      </div>
      <div className='hide hide-right w-full space-y-4 md:w-3/4'>
        <SkillList list={skillList} />
        <div className='w-full space-y-4 text-sm text-primary lg:text-lg'>
          {!showText ? textList[0] : textList.map((item) => <p>{item}</p>)}
        </div>
        <button
          className='mt-4 cursor-pointer self-start rounded-lg border border-tertiary px-4 py-2 font-semibold text-tertiary hover:bg-tertiary hover:text-darker active:bg-tertiary active:text-darker'
          onClick={handleClick}>
          Read more
        </button>
      </div>
    </article>
  )
}
export default ProjectPage
