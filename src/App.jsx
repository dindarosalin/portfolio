import './App.css'
import Navbar from './components/navbar'
import About from './pages/about'
import Projects from './pages/projects'
import Learn from './pages/learn'
import Experiences from './pages/experiences'
import Contact from './pages/contact'

function App() {
  return (
    <main className='scroll-smooth'>
      <Navbar />
      <About />
      <Projects />
      <Learn />
      <Experiences />
      <Contact />
    </main>
  )
}

export default App
