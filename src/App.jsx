import './App.css'

import Navbar from './components/navbar'
import Home from './pages/public/home'
import About from './pages/public/about'
// import Learn from './pages/public/learn'
import Projects from './pages/public/projects'
import Experiences from './pages/public/experiences'
import Certifications from './pages/public/certifications'
import Contact from './pages/public/contact'
import Footer from './pages/public/footer'

function App() {
  return (
    <main>
      <Navbar />

      <Home />
      <About />
      {/* <Learn /> */}
      <Projects />
      <Experiences />
      <Certifications />
      <Contact />

      <Footer />
    </main>
  )
}

export default App