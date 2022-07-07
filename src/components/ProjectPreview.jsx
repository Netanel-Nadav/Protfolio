import React from 'react'

export const ProjectPreview = ({ project }) => {

    const {imgUrl, name, tech, link} = project
    return (
        <div className="project-preview card flex column">
            <div className="card-header">
                <img src={imgUrl} alt="Dotify" />
            </div>
            <div className="card-body">
                <h2>{name}</h2>
                <p>{tech.map((technology, idx) => <span key={idx}>{technology}</span>)}</p>
            </div>
            <div className="card-footer">
                <button>See Project</button>
            </div>
        </div>
    )
}
