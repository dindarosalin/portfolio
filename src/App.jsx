import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PublicLayout from './layouts/publicLayout'

import Home from './pages/public/home'
import About from './pages/public/about'
import Projects from './pages/public/projects/projects'
import Experiences from './pages/public/experiences'
import Certifications from './pages/public/certifications'
import ConnectForm from './pages/public/connectForm'
import Contribution from './pages/public/contribution'

import ProjectDetail from './pages/public/projects/projectDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path="/"
            element={
                <PublicLayout>
                    <Home />
                    <About />
                    <Experiences />
                    <Contribution />
                    <Projects />
                    <Certifications />
                    <ConnectForm />
                </PublicLayout>
            }
        />
        <Route
            path="/projects/:slug"
            element={
                <PublicLayout>
                    <ProjectDetail />
                </PublicLayout>
            }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App