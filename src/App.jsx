import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <div className="skills-section gap">
      <h1>Skills & Expertise</h1>
      <Skills />
    </div>
    </>
  )
}

export default App
