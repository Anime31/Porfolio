import React from 'react'

export const ProjectItem = ({ image, name}) => {
  return (
    <div className='projetcItem'>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage' />
        <h1> </h1>
    </div>
  )
}
