import './App.css'

import PublicLayout from './layouts/publicLayout'

import Home from './pages/public/home'
import About from './pages/public/about'
import Projects from './pages/public/projects'
import Experiences from './pages/public/experiences'
import Certifications from './pages/public/certifications'
import ConnectForm from './pages/public/connectForm'

function App() {
  return (
    <PublicLayout>
      <Home />
      <About />
      <Projects />
      <Experiences />
      <Certifications />
      <ConnectForm />
    </PublicLayout>
  )
}

export default App