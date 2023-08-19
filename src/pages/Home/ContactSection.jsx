import { useRef, useEffect, useState } from 'react'
import Form from '../../components/Form'
import Heading from '../../components/Heading'

function ContactHome() {
  const contactRef = useRef()
  const letterOneRef = useRef()
  const letterTwoRef = useRef()

  const [refVisible, setRefVisible] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setRefVisible(entry.isIntersecting)
          refVisible &&
            entry.target.classList.toggle('show', entry.isIntersecting)
          letterOneRef.current.classList.toggle(
            'letter-one',
            entry.isIntersecting
          )
          letterTwoRef.current.classList.toggle(
            'letter-two',
            entry.isIntersecting
          )
          entry.isIntersecting && observer.unobserve(entry.target)
        })
      },
      { rootMargin: '100px', threshold: 0.1 }
    )
    contactRef.current.querySelectorAll('.hide').forEach((content) => {
      observer.observe(content)
    })
  }, [refVisible])

  return (
    <section
      id='contact'
      ref={contactRef}
      className='flex w-full justify-center overflow-hidden py-40'>
      <div className='flex w-4/5 max-w-[1050px] flex-col items-center space-y-8'>
        <Heading title='Contact' />
        <div
          id='form-container'
          className='flex w-full flex-col-reverse items-center justify-between lg:flex-row lg:items-start lg:space-x-16'>
          <div className='hide hide-left z-10 w-full xs:w-4/5 lg:w-full'>
            <Form />
          </div>
          <div className='hide hide-right w-1/2 max-w-full lg:w-full'>
            <div className='w-full lg:block'>
              <svg
                ref={letterOneRef}
                className='letter-one'
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 100 70'
                fill='none'>
                <g id='contact-img-green'>
                  <rect
                    id='Rectangle 1'
                    x='0.5'
                    y='0.5'
                    width='99'
                    height='69'
                    stroke='#74C7FE'
                  />
                  <path
                    id='Line 1'
                    d='M36.1459 31L0.681989 69.0304'
                    stroke='#74C7FE'
                  />
                  <path
                    id='Line 2'
                    d='M99.1459 68.7617L63.682 30.7314'
                    stroke='#74C7FE'
                  />
                  <path
                    id='Rectangle 2'
                    d='M50 43.334L1.32504 0.5H98.675L50 43.334Z'
                    stroke='#74C7FE'
                  />
                </g>
              </svg>
              <svg
                ref={letterTwoRef}
                className='letter-two absolute left-0 top-0 z-0 -translate-x-[100%] opacity-0'
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 100 70'
                fill='none'>
                <g id='contact-img-blue'>
                  <rect
                    id='Rectangle 1'
                    x='0.5'
                    y='0.5'
                    width='99'
                    height='69'
                    stroke='#74C7FE'
                  />
                  <path
                    id='Line 1'
                    d='M36.1459 31L0.681989 69.0304'
                    stroke='#74C7FE'
                  />
                  <path
                    id='Line 2'
                    d='M99.1459 68.7617L63.682 30.7314'
                    stroke='#74C7FE'
                  />
                  <path
                    id='Rectangle 2'
                    d='M50 43.334L1.32504 0.5H98.675L50 43.334Z'
                    stroke='#74C7FE'
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactHome
