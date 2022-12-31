import React from 'react'
import video from '../assets/videobg.mp4'

const Main = () => {
  return (
    
        <video autoPlay loop muted id='video'>
          <source src={video} type='video/mp4'/> 
        </video>

  )
}

export default Main