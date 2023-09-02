import LoadImg from './LoadImg'

export default function Slider({ imgList, alt, link }) {
  let projectImgList = [...imgList]
  let projectAltList = [...alt]
  console.log(projectAltList)

  return (
    <div className='text-white'>
      <a href={link} rel='noopener noreferrer' target='_blank'>
        <LoadImg
          imgLowRes={projectImgList[0]}
          imgHighRes={projectImgList[1]}
          addClassName='max-w-full max-h-[300px] h-full object-cover rounded-lg duration-300 hover:scale-105'
          alt={alt}
        />
      </a>
      <button>Prev</button>
      <button>Next</button>
    </div>
  )
}
