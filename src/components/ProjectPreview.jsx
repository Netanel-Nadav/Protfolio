import React from 'react'
import { Link } from 'react-router-dom';


export const ProjectPreview = ({ project }) => {

    const { imgUrl, name, tech, link, id } = project

    return (
        <div className="project-preview card flex column">
            <Link to={`/projects/${id}`}>
                <div className="card-header">
                    <img src={imgUrl} alt="Dotify" />
                </div>
                <div className="card-body">
                    <h2>{name}</h2>
                    <p>{tech.map((technology, idx) => <span key={idx}>{technology}</span>)}</p>
                </div>
                <div className="card-footer">
                    <button className='btn'><a href={link} target="_blank">See Project <i></i><i className='elem-end'></i> </a></button>
                </div>
            </Link>
        </div>
    )
}
