import './App.css'
import Navbar from './components/navbar'
import About from './pages/about'
import Projects from './pages/projects'
import Learn from './pages/learn'
import Experiences from './pages/experiences'
import Certifications from './pages/certifications'
import Contact from './pages/contact'
import Home from './pages/home'

function App() {
  return (
    <main>
      <Navbar />
      <Home/>
      <About />
      <Projects />
      <Learn />
      <Experiences />
      <Certifications />
      <Contact />
    </main>
  )
}

export default App
