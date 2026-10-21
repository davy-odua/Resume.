import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "./components.css";

const Home = () => {
  return (
    <>
    <div className="home gap">
      <div className="home-intro">
        <h4 className="home-gap">Hi, I'm David Oduor</h4>
        <h2 className="home-gap">Full Stack Developer & UI/UX Designer</h2>
        <p className="home-gap">Passionate about creating beautiful, functional digital experiences. I specialize in building <br />
          scalable web applications with modern technologies and thoughtful design.
        </p>
        <a> <FaLocationDot /> <span>Nairobi, KE</span></a>        
      </div>
      <div className="home-btns">
        <button id="black-btn"> <FaEnvelope /> Get In Touch</button>
        <button> <FaGithub /> Github</button>
        <button> <FaLinkedin /> LinkedIn</button>
      </div>
    </div>
    </>
  )
}

export default Home;