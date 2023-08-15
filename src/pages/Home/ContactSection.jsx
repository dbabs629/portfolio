import { useRef, useEffect, useState } from 'react'
import Form from '../../components/Form'
import letter from '../../assets/images/letter.png'
import Heading from '../../components/Heading'

function ContactHome() {
  const contactRef = useRef()
  const [refVisible, setRefVisible] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let pos = 0
        entries.forEach((entry) => {
          pos++
          setRefVisible(entry.isIntersecting)
          refVisible &&
            entry.target.classList.toggle('show', entry.isIntersecting)
          entry.isIntersecting && observer.unobserve(entry.target)
          console.log(pos)
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
      className='flex w-full justify-center overflow-x-hidden py-40'>
      <div className='flex w-3/4 max-w-[1050px] flex-col items-center space-y-8 sm:w-2/3 lg:w-4/5'>
        <Heading title='Contact' />
        <div className='flex w-full flex-col items-center justify-between space-x-16 lg:flex-row lg:items-start'>
          <div className='hide hide-left w-full'>
            <Form />
          </div>
          <div className='hide hide-right hidden w-full lg:block'>
            <div className='w-full max-w-[500px] lg:block'>
              <img className='h-auto max-w-full' src={letter} alt='letter' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactHome
