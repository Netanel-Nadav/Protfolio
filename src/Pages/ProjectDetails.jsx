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
                    <p>{description}</p>
                    {tech.map(technology => (
                        <div className='tech-details'>{technology}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
