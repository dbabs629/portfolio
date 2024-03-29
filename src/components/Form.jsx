import { useState } from 'react'
import Button from './Button'

function Form() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  const submitEmail = (e) => {
    let formData = { name, email, message }
    e.preventDefault()
    if (!message || !name || !email) {
      alert('Please fill out all fields')
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      })
        .then(() => {
          alert('Success!')
          setEmail('')
          setName('')
          setMessage('')
        })
        .catch((error) => alert(error))
    }
  }

  return (
    <form
      name='contact'
      method='post'
      onSubmit={submitEmail}
      className='z-20 mx-auto flex w-full flex-col space-y-5 text-gray-800'>
      <input type='hidden' name='form-name' value='contact' />
      <input
        className='w-full rounded-lg border border-primary bg-darkest p-4 text-primary caret-pink-500 outline-none'
        value={name}
        type='text'
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
        type='text'
        name='message'
        id='message'
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Write your message here..'></textarea>
      <div data-netlify-recaptcha='true'></div>
      <Button type='submit'>Send Email</Button>
    </form>
  )
}

export default Form
