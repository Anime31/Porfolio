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
          <a href='https://www.linkedin.com/in/animesh-kumar-322719186/' target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a href="mailto:animesh3107kumar@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
          <a href="https://github.com/Anime31" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1>
          Skills
        </h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>React, AntD, MaterialUI</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, Postgres, Java, C++, AWS</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, Java, C++, C</span>
          </li>
        </ol>
      </div>
      
    </div>
  )
};
