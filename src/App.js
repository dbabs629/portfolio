import { Routes, Route } from 'react-router-dom'
import Nav from '../src/components/nav/Nav'
import Footer from '../src/components/Footer'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import WebDevProjectPage from './pages/Projects/WebDevProjectPage'
import RpsProjectPage from './pages/Projects/RpsProjectPage'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route
          path='project/webdev-project-page'
          element={<WebDevProjectPage />}
        />
        <Route path='project/rps-project-page' element={<RpsProjectPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
