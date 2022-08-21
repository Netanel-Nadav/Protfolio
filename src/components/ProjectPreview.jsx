import React from 'react'
import { Link } from 'react-router-dom'

export const ProjectPreview = ({ project }) => {

    const { coverImg, name, tech, id } = project
    console.log(tech);
    return (
        <div className="project-preview card flex column space-between">
            <div className="card-header" style={{ backgroundImage: `url(${coverImg})` }}>

            </div>
            <div className="card-body">
                <h2>{name}</h2>
                <p>{tech.map((technology, idx) => <span key={idx}>{technology.name}</span>)}</p>
            </div>
            <div className="card-footer flex justify-center">
                <Link to={`/${id}`}><button className='btn'> See Project</button></Link>
            </div>

        </div>
    )
}
