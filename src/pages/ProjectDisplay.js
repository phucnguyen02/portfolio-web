import React from 'react'
import {useParams} from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css'
import { Link } from 'react-router-dom';

function ProjectDisplay() {
    const {id} = useParams();
    if(id < 0 || id >= ProjectList.length){
        return <div>Invalid project ID.</div>
    }

    const project = ProjectList[id];
    
    return (
        <div className='project'>
            <h1> {project.name} </h1>
            <img src = {project.image}/>
            <p><b>Skills:</b> {project.skills}</p>
            <p><b>Description:</b> {project.description}</p>
            <Link to = {project.link}><GitHubIcon/></Link>
        </div>
    )
}

export default ProjectDisplay