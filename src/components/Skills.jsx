import "./components.css"

const Skills = () => {
  return (
    <>
    <div className="skills">
        <h3>Frontend</h3>
        <div className="skills-sides">
            <div className="left">
                <p>React</p>
                <h5 className="percentage">85%</h5>
                <div className="white">
                    <div className="black"></div>
                </div>
            </div>
            <div className="right">
                <p>Typescript</p>
                <h5 className="percentage">85%</h5>
                <div className="white">
                    <div className="black"></div>
                </div>            
            </div>            
        </div>
    </div>
    </>
  )
}

export default Skills;