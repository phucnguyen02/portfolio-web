import React from 'react'
import {useNavigate} from 'react-router-dom';

function ProjectItem({image, name, id}) {
  const navigate = useNavigate();
  function handleClickProject(){
    navigate('/project/' + id);
  }
  return (
    <div className='projectItem' onClick = {handleClickProject}>
        <div style = {{backgroundImage: `url(${image})`}} className = 'bgImage'/>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem