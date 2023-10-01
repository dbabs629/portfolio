import { useState, useEffect } from 'react'
import LoadImg from './LoadImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Slider({ imgHighResList, imgLowResList, alt, link }) {
  const [count, setCount] = useState(0)
  const [img, setImg] = useState(imgLowResList[0])

  useEffect(() => {
    setImg(imgHighResList[count])
  }, [count, imgHighResList, img])

  let handleClick = (e) => {
    if (e.currentTarget.name === 'prev') {
      if (count <= 0) {
        setCount(imgHighResList.length - 1)
      } else {
        setCount(count - 1)
        console.log(count)
      }
    } else if (e.currentTarget.name === 'next') {
      if (count >= imgHighResList.length - 1) {
        setCount(0)
      } else {
        setCount(count + 1)
        console.log(count)
      }
    } else if (e.target.name === 'gallery-img') {
      setCount(parseInt(e.target.dataset.index))
      console.log(count)
    } else {
      console.log('error')
    }
  }

  return (
    <div className='z-20 flex h-auto w-full flex-col'>
      {/* Slider displays image and buttons controls the count */}
      <div className='hide hide-left mx-auto flex w-full justify-between text-primary'>
        <div className='w-1/5 self-center'>
          <button
            name='prev'
            onClick={handleClick}
            className='ease mx-auto hidden h-20 w-20 rounded-full border-4 border-primary p-4 duration-150 hover:scale-105 hover:p-5 active:scale-95 lg:block'>
            <FontAwesomeIcon icon={faChevronLeft} className='h-full w-full' />
          </button>
        </div>
        <div className='max-h-[350px] w-full max-w-[600px] border'>
          <a href={link} rel='noopener noreferrer' target='_blank'>
            <LoadImg
              imgLowRes={img}
              imgHighRes={img}
              count={count}
              addClassName='max-w-[95%] max-h-[95%] object-cover rounded-lg mx-auto'
              alt={alt}
            />
          </a>
        </div>
        <div className='w-1/5 self-center'>
          <button
            name='next'
            onClick={handleClick}
            className='ease mx-auto hidden h-20 w-20 rounded-full border-4 border-primary p-4 duration-150 hover:scale-105 hover:p-5 active:scale-95 lg:block'>
            <FontAwesomeIcon icon={faChevronRight} className='h-full w-full' />
          </button>
        </div>
      </div>
      <div className='mx-auto h-auto w-4/5'>
        {/* Number of Images  */}
        <div className='text-center text-primary'>
          {count + 1} / {imgHighResList.length}
        </div>
        {/* Img Gallery */}
        <div className='mx-auto flex w-full flex-row items-center justify-around overflow-x-scroll p-4 md:overflow-auto lg:px-0'>
          {imgLowResList.map((item, i) => {
            if (count === i) {
              return (
                <img
                  key={i}
                  src={item}
                  alt=''
                  data-index={i}
                  name='gallery-img'
                  onClick={handleClick}
                  className='z-20 max-w-[20%] cursor-pointer self-center rounded-sm border border-primary duration-150 sm:max-w-[15%]'
                />
              )
            } else {
              return (
                <img
                  key={i}
                  src={item}
                  alt=''
                  data-index={i}
                  name='gallery-img'
                  onClick={handleClick}
                  className='z-20 max-w-[20%] cursor-pointer self-center rounded-sm border-primary duration-150 hover:border-b sm:max-w-[15%]'
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
