import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ProjectPage from './pages/Projects/ProjectPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='project' element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App
