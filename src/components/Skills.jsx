import "./components.css"

const Skills = ({skillTitle, leftTech, leftPercent, rightTech, rightPercent }) => {
  return (
    <>
    <div className="skills">
        <h3>{skillTitle}</h3>
        <div className="skills-sides">
            <div className="left">
                <p>{leftTech}</p>
                <h5 className="percentage">{leftPercent}</h5>
                <div className="white">
                    <div className="black"></div>
                </div>
            </div>
            <div className="right">
                <p>{rightTech}</p>
                <h5 className="percentage">{rightPercent}</h5>
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