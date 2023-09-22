import LoadImg from './LoadImg'
import SkillList from './SkillList'

export default function Slider({
  lowResImgList,
  highResImgList,
  imgArray,
  alt,
  link,
  list,
  text,
}) {

  return (
    <div className='text-white'>
      <a href={link} rel='noopener noreferrer' target='_blank'>
        <LoadImg
          imgLowRes={lowResImgList}
          imgHighRes={highResImgList}
          addClassName='max-w-full max-h-[300px] h-full object-cover rounded-lg duration-300 hover:scale-105'
          alt={alt}
        />
      </a>
      <div>
        <button name='prev'>
          Prev
        </button>
        <button name='next'>
          Next
        </button>
      </div>
      <div className='hide hide-right self-start'>
        <SkillList list={list} />
      </div>
      <div>
        <p className='hide hide-right text-primary lg:text-lg'>{text}</p>
      </div>
    </div>
  )
}
