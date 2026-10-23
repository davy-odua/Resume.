import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import { BiSolidBriefcaseAlt } from "react-icons/bi";

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
    <div className="experience-section">
      <div className="experience-gap gap">
        <div className="expe-title"><h1>Experience</h1></div>
        <div className="experience-line">
          <BiSolidBriefcaseAlt className="brief-case" />
          <Experience roleTitle="Senior Full Stack Developer" company="TechCorp Inc." description="Leading development of cloud-based enterprise solutions" service1="Architected and built a microservices plaform serving 100k+ users" service2="Reduced application load time by 60% through optimization" service3="Mentored a team of 5 junior developers" year="2025 - Present" />
          <BiSolidBriefcaseAlt className="middle-case brief-case" />
          <Experience roleTitle="Full Stack Developer" company="StartupXYZ" description="Built core features for SaaS product from the ground up" service1="Developed real-time collaboration features using WebSockets" service2="Implemented CI/CD pipeline reducing deployment time by 80%" service3="Contributed to achieving Series A funding milestone" year="2024 - 2025" />
          <BiSolidBriefcaseAlt className="bottom-case brief-case" />
          <Experience roleTitle="Frontend Developer" company="Digital Agency Co." description="Created responsive web applications for diverse clients" service1="Delivered 15+ client projects with 100% satisfaction rate" service2="Established component library used across all projects" service3="Led redesign of company website increasing traffic by 40%" year="2023 - 2024" />   
        </div>
      </div>
    </div>
    </>
  )
}

export default App
