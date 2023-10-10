import { Routes, Route } from 'react-router-dom'
import Nav from '../src/components/nav/Nav'
import IconsList from './components/IconsList'
import Footer from '../src/components/Footer'
import ShapesAnimation from './components/ShapesAnimation'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import WebDevProjectPage from './pages/Projects/WebDevProjectPage'
import RpsProjectPage from './pages/Projects/RpsProjectPage'
import PortfolioProjectPage from './pages/Projects/PortfolioProjectPage'

function App() {
  return (
    <>
      <Nav />
      <ShapesAnimation />
      <IconsList />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route
          path='project/webdev-project-page'
          element={<WebDevProjectPage />}
        />
        <Route path='project/rps-project-page' element={<RpsProjectPage />} />
        <Route
          path='project/portfolio-project-page'
          element={<PortfolioProjectPage />}
        />
        <Route path='*' element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
