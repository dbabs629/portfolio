import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function ImgSlider({ imgHighResList, imgLowResList, alt, demoLink, codeLink }) {
  const [sliderIndex, setSliderIndex] = useState(0)

  function nextImg() {
    setSliderIndex((index) => {
      if (index === imgLowResList.length - 1) return 0
      return index + 1
    })
  }

  function prevImg() {
    setSliderIndex((index) => {
      if (index === 0) return imgLowResList.length - 1
      return index - 1
    })
  }

  let loaded = (e) => {
    let index = e.target.dataset.indexNumber
    e.target.src = imgHighResList[index]
  }

  return (
    <section className='h-full w-full'>
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
          {imgLowResList.map((img, i) => {
            return (
              <a
                key={img}
                href={demoLink}
                rel='noopener noreferrer'
                target='_blank'
                className='h-full w-full shrink-0 grow-0'>
                <img
                  src={imgLowResList[i]}
                  alt=''
                  className={`block h-full w-full rounded-sm object-cover transition-all duration-300 ease-in-out`}
                  style={{ translate: `${-100 * sliderIndex}%` }}
                  data-index-number={i}
                  loading='lazy'
                  onLoad={loaded}
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
      <div className='scroll-bar mx-auto flex w-full snap-x snap-mandatory snap-always flex-row space-x-2 overflow-x-scroll scroll-smooth py-2 md:w-3/4'>
        {imgLowResList.map((item, i) => {
          return i === sliderIndex ? (
            <img
              key={item}
              src={imgLowResList[i]}
              alt=''
              data-index-number={i}
              className={`block max-w-[15%] shrink-0 grow-0 snap-center rounded-sm border-2 border-tertiary object-cover transition-all duration-300 ease-in-out`}
              onLoad={loaded}
              loading='lazy'
            />
          ) : (
            <img
              key={item}
              src={imgLowResList[i]}
              alt=''
              data-index-number={i}
              onClick={() => setSliderIndex(i)}
              className='z-10 max-w-[15%] shrink-0 grow-0 cursor-pointer rounded-sm border-2 border-darker hover:border-b hover:border-b-tertiary'
              onLoad={loaded}
              loading='lazy'
            />
          )
        })}
      </div>
      <div className='mx-auto mt-6 flex w-full items-center justify-between text-center text-sm text-primary md:w-3/4 lg:w-3/4'>
        <a href={demoLink} rel='noreferrer' target='_blank' className='z-10'>
          <button className='w-24 cursor-pointer self-start rounded-lg border border-tertiary py-2 font-semibold text-tertiary hover:bg-tertiary hover:text-darker active:bg-tertiary active:text-darker md:w-32'>
            View Demo
          </button>
        </a>
        <p>
          {sliderIndex + 1} / {imgHighResList.length}
        </p>
        <a href={codeLink} rel='noreferrer' target='_blank' className='z-10'>
          <button className='w-24 cursor-pointer self-start rounded-lg border border-tertiary py-2 font-semibold text-tertiary hover:bg-tertiary hover:text-darker active:bg-tertiary active:text-darker md:w-32'>
            View Code
          </button>
        </a>
      </div>
    </section>
  )
}
export default ImgSlider
