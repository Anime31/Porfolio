import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <XIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2024 Animesh Kumar</p>
    </div>
  )
}
