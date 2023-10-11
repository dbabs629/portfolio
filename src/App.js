import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import Footer from '../src/components/Footer'
const IconsList = lazy(() => import('./components/IconsList'))
const Nav = lazy(() => import('../src/components/nav/Nav'))
const ShapesAnimation = lazy(() => import('./components/ShapesAnimation'))
const AboutPage = lazy(() => import('./pages/About/AboutPage'))
const WebDevPage = lazy(() => import('./pages/Projects/WebDevPage'))
const RpsPage = lazy(() => import('./pages/Projects/RpsPage'))
const PortfolioPage = lazy(() => import('./pages/Projects/PortfolioPage'))

function App() {
  return (
    <>
      <Nav />
      <ShapesAnimation />
      <IconsList />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='project/webdev-project-page' element={<WebDevPage />} />
          <Route path='project/rps-project-page' element={<RpsPage />} />
          <Route
            path='project/portfolio-project-page'
            element={<PortfolioPage />}
          />
          <Route path='/*' element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
