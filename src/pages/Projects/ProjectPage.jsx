import { useRef } from 'react'
import Heading from '../../components/Heading'
import Slider from '../../components/Slider'
import useObserver from '../../components/useObserver'

function ProjectPage({
  list,
  title,
  alt,
  lowResImgList,
  highResImgList,
  imgArray,
  link,
  text,
}) {
  const projectRef = useRef()
  useObserver(projectRef)

  return (
    <div className='w-full'>
      <div className='flex justify-center pt-32'>
        <Heading title={title} />
      </div>
      <article
        ref={projectRef}
        className='mx-auto flex w-4/5 max-w-[450px] flex-col items-center space-y-8 lg:max-w-[700px]'>
        <div className='hide hide-left'>
          <Slider
            title={title}
            lowResImgList={lowResImgList}
            highResImgList={highResImgList}
            imgArray={imgArray}
            alt={alt}
            link={link}
            list={list}
            text={text}
          />
        </div>
      </article>
    </div>
  )
}
export default ProjectPage
