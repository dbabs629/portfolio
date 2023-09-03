import { useEffect, useState } from 'react'

export default function useObserver(ref) {
  const [refVisible, setRefVisible] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setRefVisible(entry.isIntersecting)
          refVisible &&
            entry.target.classList.toggle('show', entry.isIntersecting)
          entry.isIntersecting && observer.unobserve(entry.target)
        })
      },
      { rootMargin: '100px', threshold: 0.1 }
    )
    ref.current.querySelectorAll('.hide').forEach((content) => {
      observer.observe(content)
    })
  }, [refVisible, ref])
}
