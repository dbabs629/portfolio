import { useState, useEffect } from 'react'
import Button from './Button'

function Form({ setFormStatus }) {
  const formData = JSON.parse(localStorage.getItem('form'))
  const [form, setForm] = useState(formData || [])
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitEmail = (e) => {
    e.preventDefault()
    if (!body || !title || !email) {
      alert('Please fill out all fields')
      setFormStatus(false)
    } else {
      setFormStatus(true)
      setForm([...form, { email, title, body }])
      setEmail('')
      setTitle('')
      setBody('')
    }
  }

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
    console.log(formData)
  }, [formData])

  return (
    <form
      onSubmit={submitEmail}
      netlify
      className='mx-auto flex w-full flex-col space-y-5 text-gray-800'>
      <input
        className='w-full rounded-lg border border-primary bg-darkest p-4 text-primary caret-pink-500 outline-none'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Your Email'
      />
      <input
        className='w-full rounded-lg border border-primary bg-darkest p-4 text-primary caret-pink-500 outline-none'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Subject'
      />
      <textarea
        className='w-full rounded-lg border border-primary bg-darkest p-4 pb-12 text-primary caret-pink-500 outline-none'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Write your message here..'></textarea>
      <Button>Send Email</Button>
    </form>
  )
}

export default Form
