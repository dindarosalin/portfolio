import './App.css'

import Navbar from './components/navbar'
import Home from './pages/public/home'
import About from './pages/public/about'
import Projects from './pages/public/projects'
import Experiences from './pages/public/experiences'
import Certifications from './pages/public/certifications'
import ConnectForm from './pages/public/connectForm'
import Footer from './components/footer'

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
        <ConnectForm />
      </main>

      <Footer />
    </>
  )
}

export default App