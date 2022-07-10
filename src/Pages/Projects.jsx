import React, { useEffect, useState } from 'react'
import { ProjectPreview } from '../components/ProjectPreview'
import { projectService } from '../services/project.service'

export const Projects = () => {

  const [projects, setProjects] = useState(null)

  useEffect(() => {
    const projects = projectService.query()
    setProjects(projects)
  }, [])

  return (
    <>
      <h1 style={{textAlign: 'center', marginBottom: '3rem'}}>Check my Latest Projects</h1>
      <div className="projects">
        {projects && projects.map(project => <ProjectPreview project={project} key={project.id} />)}
      </div>
    </>
  )
}
