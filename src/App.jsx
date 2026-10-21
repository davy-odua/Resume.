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
      <Skills skillTitle="Frontend" leftTech="React" leftPercent="85%" rightTech="JavaScript" rightPercent="85%"  />
      <Skills skillTitle="Backend" leftTech="Node.js" leftPercent="75%" rightTech="Python" rightPercent="90%"  />
      <Skills skillTitle="Database" leftTech="PostgreSQL" leftPercent="80%" rightTech="MongoDB" rightPercent="70%"  />
      <Skills skillTitle="Design" leftTech="Figma" leftPercent="85%" rightTech="UI/UX Design" rightPercent="70%"  />
    </div>
    </>
  )
}

export default App
