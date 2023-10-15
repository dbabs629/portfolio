import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
const HomePage = lazy(() => import('./pages/Home/HomePage'))
const Footer = lazy(() => import('../src/components/Footer'))
const IconsList = lazy(() => import('./components/IconsList'))
const Nav = lazy(() => import('../src/components/nav/Nav'))
const ShapesAnimation = lazy(() => import('./components/ShapesAnimation'))
const WebDevPage = lazy(() => import('./pages/Projects/WebDevPage'))
const RpsPage = lazy(() => import('./pages/Projects/RpsPage'))
const PortfolioPage = lazy(() => import('./pages/Projects/PortfolioPage'))

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Suspense
        fallback={
          <div className='flex h-screen w-screen items-center justify-center space-x-4'>
            <h2 className='animate-pulse text-4xl font-bold text-red'>
              Loading
            </h2>
            <div className='h-[10%] w-[10%] animate-pulse'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='1em'
                viewBox='0 0 512 512'
                fill='#74C7FE'
                className='h-full w-full animate-spin'>
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --*/}
                <path d='M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z' />
              </svg>
            </div>
          </div>
        }>
        <Nav />
        <ShapesAnimation />
        <IconsList />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='project/webdev-project-page' element={<WebDevPage />} />
          <Route path='project/rps-project-page' element={<RpsPage />} />
          <Route
            path='project/portfolio-project-page'
            element={<PortfolioPage />}
          />
          <Route path='/*' element={<HomePage />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
