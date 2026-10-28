const Experience = ({roleTitle, company, description, service1, service2, service3, year }) => {
  return (
    <>
    <div className="experience">
        <div className="role">
            <h2>{roleTitle}</h2>
            <p>
            {company} <br />
            {description}
            </p>
            <ul>
                <li>{service1}</li>
                <li>{service2}</li>
                <li>{service3}</li>
            </ul>
            <div className="experience-time"><h3>{year}</h3></div>
        </div>
    </div>
    
    </>
  )
}

export default Experience;