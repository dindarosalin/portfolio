import './App.css'

import Navbar from './pages/public/navbar'
import Home from './pages/public/home'
import About from './pages/public/about'
import Projects from './pages/public/projects'
import Experiences from './pages/public/experiences'
import Certifications from './pages/public/certifications'
import Contact from './pages/public/contact'
import Footer from './pages/public/footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Experiences />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App