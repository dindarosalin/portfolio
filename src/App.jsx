import './App.css'
import Navbar from './components/navbar'
import About from './pages/about'
import Projects from './pages/projects'
import Learn from './pages/learn'
import Experiences from './pages/experiences'
import Certifications from './pages/certifications'
import Contact from './pages/contact'
import Home from './pages/home'
import Footer from './pages/footer'

function App() {
  return (
    <main>
      <Navbar />
      <Home/>
      <About />
      <Learn />
      <Projects />
      <Experiences />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
