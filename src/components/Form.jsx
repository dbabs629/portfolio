import { useState, useEffect } from 'react'
import Button from './Button'

function Form({ setFormStatus }) {
  const formData = JSON.parse(localStorage.getItem('form'))
  const [form, setForm] = useState(formData || [])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const submitEmail = (e) => {
    e.preventDefault()
    if (!message || !name || !email) {
      alert('Please fill out all fields')
      setFormStatus(false)
    } else {
      setFormStatus(true)
      setForm([...form, { email, name, message }])
      setEmail('')
      setName('')
      setMessage('')
    }
  }

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
    console.log(formData)
  }, [formData])

  return (
    <form
      onSubmit={submitEmail}
      action='POST'
      data-netlify='true'
      className='z-20 mx-auto flex w-full flex-col space-y-5 text-gray-800'>
      <input
        className='w-full rounded-lg border border-primary bg-darkest p-4 text-primary caret-pink-500 outline-none'
        value={name}
        type='name'
        name='name'
        id='name'
        onChange={(e) => setName(e.target.value)}
        placeholder='Your name'
      />
      <input
        className='w-full rounded-lg border border-primary bg-darkest p-4 text-primary caret-pink-500 outline-none'
        value={email}
        type='email'
        name='email'
        id='email'
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Your email'
      />
      <textarea
        className='w-full rounded-lg border border-primary bg-darkest p-4 pb-12 text-primary caret-pink-500 outline-none'
        value={message}
        type='message'
        name='message'
        id='message'
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Write your message here..'></textarea>
      <div data-netlify-recaptcha='true'></div>
      <Button>Send Email</Button>
    </form>
  )
}

export default Form
