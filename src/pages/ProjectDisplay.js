import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

export const ProjectDisplay = () => {

    const {id} = useParams();
    const project = projectList[id];

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="" />
        <p>
            <b>Skills: </b> {project.skills}
        </p>
        <GitHubIcon />
    </div>
  )
}
