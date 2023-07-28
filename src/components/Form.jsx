import { useState, useEffect } from 'react'
import Button from './Button'

function Form() {
  const formData = JSON.parse(localStorage.getItem('form'))
  const [form, setForm] = useState(formData || [])
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitEmail = (e) => {
    e.preventDefault()
    !body || !title
      ? alert('Missing fields')
      : setForm([...form, { email, title, body }])
    setEmail('')
    setTitle('')
    setBody('')
  }

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
    console.log(formData)
  }, [formData])

  return (
    <form
      onSubmit={submitEmail}
      className='max-w-[450px] w-full mx-auto flex flex-col space-y-2 text-gray-800'>
      <input
        className='w-full p-2 rounded-lg border-2'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Your Email'
      />
      <input
        className='w-full p-2 rounded-lg border-2'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Subject'
      />
      <textarea
        className='w-full p-2 rounded-lg border-2 pb-12'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Write your message here..'></textarea>
      <Button>Send Email</Button>
    </form>
  )
}

export default Form
