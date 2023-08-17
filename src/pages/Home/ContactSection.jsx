import { useRef, useEffect, useState } from 'react'
import Form from '../../components/Form'
import Heading from '../../components/Heading'

function ContactHome() {
  const contactRef = useRef()
  const [refVisible, setRefVisible] = useState()
  const [formStatus, setFormStatus] = useState()
  const [contactImgColor, setContactImgColor] = useState('#74C7FE')

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

  setFormStatus(true)
  setContactImgColor('#74C7FE')
  console.log(formStatus)

  useEffect(() => {
    if (!formStatus) {
      setContactImgColor('#74C7FE')
    } else {
      setContactImgColor('#6EE7B7')
      let contactImgGreen = document.getElementById('contact-img-green')
      let contactImgBlue = document.getElementById('contact-img-blue')
      contactImgGreen.classList.add('move-right')
      contactImgBlue.classList.add('move-right')
    }
  }, [formStatus])

  return (
    <section
      id='contact'
      ref={contactRef}
      className='flex w-full justify-center overflow-x-hidden py-40'>
      <div className='flex w-4/5 max-w-[1050px] flex-col items-center space-y-8'>
        <Heading title='Contact' />
        <div
          id='form-container'
          className='flex w-full flex-col items-center justify-between space-x-16 lg:flex-row lg:items-start'>
          <div className='hide hide-left z-10 w-full'>
            <Form setFormStatus={setFormStatus} />
            <form name='contact' netlify>
              <p>
                <label>
                  Name <input type='text' name='name' />
                </label>
              </p>
              <p>
                <label>
                  Email <input type='email' name='email' />
                </label>
              </p>
              <p>
                <button type='submit'>Send</button>
              </p>
            </form>
          </div>
          <div className='hide hide-right hidden w-full lg:block'>
            <div className='w-full lg:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='95%'
                height='95%'
                viewBox='0 0 100 70'
                fill='none'>
                <g id='contact-img-green'>
                  <rect
                    id='Rectangle 1'
                    x='0.5'
                    y='0.5'
                    width='99'
                    height='69'
                    stroke={contactImgColor}
                  />
                  <path
                    id='Line 1'
                    d='M36.1459 31L0.681989 69.0304'
                    stroke={contactImgColor}
                  />
                  <path
                    id='Line 2'
                    d='M99.1459 68.7617L63.682 30.7314'
                    stroke={contactImgColor}
                  />
                  <path
                    id='Rectangle 2'
                    d='M50 43.334L1.32504 0.5H98.675L50 43.334Z'
                    stroke={contactImgColor}
                  />
                </g>
              </svg>
              <svg
                className='absolute left-0 top-0 z-0 -translate-x-[100%] transition duration-300'
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
                    stroke={contactImgColor}
                  />
                  <path
                    id='Line 1'
                    d='M36.1459 31L0.681989 69.0304'
                    stroke={contactImgColor}
                  />
                  <path
                    id='Line 2'
                    d='M99.1459 68.7617L63.682 30.7314'
                    stroke={contactImgColor}
                  />
                  <path
                    id='Rectangle 2'
                    d='M50 43.334L1.32504 0.5H98.675L50 43.334Z'
                    stroke={contactImgColor}
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
