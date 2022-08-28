import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { projectService } from '../services/project.service'

export const ProjectDetails = () => {

    const { id } = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        const project = projectService.getById(id)
        setProject(project)
    }, [])

    if (!project) return 'Loading...';
    const { name, imgUrl, coverImg, tech, link, description } = project
    return (
        <div className="project-details flex justify-center align-center">
            <div className="wrraper flex">
                <div className="img-container">
                    <img src={imgUrl} alt={name} />
                </div>
                <div className="info-container">
                    <h1>{name}</h1>
                    <p className='project-desc'>{description}</p>
                    <h3>Tech Used</h3>
                    {tech.map((technology, idx) => (
                        <div className='tech-details flex align-center' key={idx}>
                            <div className="img-container">
                                <img src={technology.imgUrl} alt={technology.name} />
                            </div>
                            <div className="details-container flex column">
                                <p className='tech-title'>{technology.name}</p>
                                <p className='tech-desc'>{technology.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a href={link} target="_blank">Watch The Project</a>
            </div>
        </div>
    )
}
