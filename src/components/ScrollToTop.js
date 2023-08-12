import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    pathname !== '/' && window.scrollTo(0, 0)
  }, [pathname])
}
export default ScrollToTop
