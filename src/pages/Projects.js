import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <h1>Projects I've worked on</h1>

      <div className = "projectList">
        { ProjectList.map((proj, idx) => <ProjectItem name = {proj.name} image = {proj.image} id = {idx}/>) }
      </div>

    </div>
  )
}

export default Projects