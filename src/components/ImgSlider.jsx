import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function ImgSlider({ imgHighResList, imgLowResList, imgList, alt, link }) {
  const [sliderIndex, setSliderIndex] = useState(0)

  function nextImg() {
    setSliderIndex((index) => {
      if (index === imgList.length - 1) return 0
      return index + 1
    })
  }

  function prevImg() {
    setSliderIndex((index) => {
      if (index === 0) return imgList.length - 1
      return index - 1
    })
  }

  return (
    <section aria-label='Image Slider' className='h-full w-full'>
      <div className='mb-2 flex h-full w-full items-center'>
        <button
          onClick={prevImg}
          className='ease z-10 mx-auto hidden h-16 w-16 rounded-full  border-4 border-primary shadow-inner shadow-primary duration-150 hover:scale-105 active:scale-95 md:block lg:h-20 lg:w-20'>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className='text-2xl text-primary'
          />
        </button>
        <div className='flex h-full w-full overflow-hidden border border-primary border-opacity-30 md:max-w-[75%]'>
          {imgList.map((img) => {
            return (
              <a
                key={img}
                href={link}
                rel='noopener noreferrer'
                target='_blank'
                className='h-full w-full shrink-0 grow-0'>
                <img
                  src={img}
                  alt=''
                  className={`block h-full w-full rounded-sm object-cover transition-all duration-300 ease-in-out`}
                  style={{ translate: `${-100 * sliderIndex}%` }}
                />
              </a>
            )
          })}
        </div>
        <button
          onClick={nextImg}
          className='ease z-10 mx-auto hidden h-16 w-16 rounded-full  border-4 border-primary shadow-inner shadow-primary duration-150 hover:scale-105 active:scale-95 md:block lg:h-20 lg:w-20'>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-2xl text-primary'
          />
        </button>
      </div>
      <div className='mx-auto flex w-4/5 flex-row items-center justify-around py-2'>
        {imgList.map((item, i) => {
          return i === sliderIndex ? (
            <img
              key={i}
              src={item}
              alt=''
              onClick={() => setSliderIndex(i)}
              className='z-10 max-w-[15%] cursor-pointer rounded-sm border border-primary'
            />
          ) : (
            <img
              key={i}
              src={item}
              alt=''
              onClick={() => setSliderIndex(i)}
              className='z-10 max-w-[15%] cursor-pointer rounded-sm border border-darker hover:border-b hover:border-b-primary'
            />
          )
        })}
      </div>
      <div className='w-full text-center text-sm text-primary'>
        {sliderIndex + 1} / {imgList.length}
      </div>
    </section>
  )
}
export default ImgSlider
