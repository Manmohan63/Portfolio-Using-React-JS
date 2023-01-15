import React from 'react'
import './Home.scss'
import img1 from "../../Assets/Home/1.png"
import Resume from "../../Assets/Home/Resume_Manmohan.pdf"
import TypewriterComponent from 'typewriter-effect'

const home = () => {
  return (
    <>
      <div className="home" id='home'>
        <div className="left">
          <img className='img1' src={img1} alt="me" />
        </div>
        <div className="right">
          <div className="wrapper">
            <span className='s1'>Hi There, I'm</span>
            <span className='s2'>Manmohan Mandhan</span>
            <TypewriterComponent
              options={{
                strings: ['A Web Developer', 'A Competitive Programmer', 'A Designer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 'natural',
                wrapperClassName: 'typewriter',
                cursorClassName: 'cursorSize'
              }} />
            <a href={Resume} download="Resume_Manmohan"><button>Download CV <ion-icon name="arrow-forward-outline"></ion-icon></button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default home;