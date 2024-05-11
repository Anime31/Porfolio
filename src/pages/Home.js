import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css"

export const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Animesh</h2>
        <div className="prompt"> 
          <p>
            A software developer with a passion for learning and creating
          </p> 
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>
          Skills
        </h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, MaterialUI</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, Postgres, Java, C++, AWS</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, Java, C++, C, Python</span>
          </li>
        </ol>
      </div>
      
    </div>
  )
};
