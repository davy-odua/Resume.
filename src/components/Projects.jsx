import laptop from "../assets/laptop-2.jpg";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Projects = ({projectTitle, description, projectTechnology1, projectTechnology2, projectTechnology3, projectTechnology4 }) => {
  return (
    <>
    <div className="project">
        <img src={laptop} alt="" />
        <h2>{projectTitle}</h2>
        <p>{description}</p>
        <div className="project-tech">
            <p>{projectTechnology1}</p>
            <p>{projectTechnology2}</p>
            <p>{projectTechnology3}</p>
            <p>{projectTechnology4}</p>
        </div>
        <div className="project-code">
            <p><IoIosCheckboxOutline /> Live Demo</p>
            <p><FaGithub /> Code</p>
        </div>
    </div>
    </>
  )
}

export default Projects