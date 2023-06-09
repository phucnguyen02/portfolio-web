import React, {useEffect} from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/Projects.css'
import 'aos/dist/aos.css';
import Aos from 'aos';

function Projects() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='projects'>
      <h1>Projects I've worked on</h1>

      <div className = "projectList" data-aos = "fade-down">
        { ProjectList.map((proj, idx) => <ProjectItem name = {proj.name} image = {proj.image} id = {idx}/>) }
      </div>

    </div>
  )
}

export default Projects