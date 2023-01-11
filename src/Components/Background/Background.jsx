import React from 'react'
import img1 from "../../Assets/my.jpg"
import './Background.scss'

const Background = () => {
  return (
    <div className="background" id='about'>
      <div className="left">
        <img src={img1} alt="me" />
      </div>
      <div className="right">
        <div className="text-container">
          <s2>Discover</s2> <br />
          <s1>About Me</s1>
          <p>My name is Manmohan Mandhan. I'm a Student at the National Institute of Technology, Rourkela. My hometown is Jamshedpur, Jharkhand. I'm very passionate and dedicated to my work. With a lot of projects and competitive programming, I've acquired the skills necessary to build a carrier in the Tech field.</p>
        </div>
        <div className="table">
          <div className="col1">
            <div className="row1"><h3>Name:</h3> Manmohan Mandhan</div>
            <div className="row2"><h3>Age:</h3> 19</div>
            <div className="row3"><h3>Department:</h3> Computer Science & Engineering</div>
            <div className="row4"><h3>College:</h3> NIT Rourkela</div>
          </div>
          <div className="col2">
            <div className="row1"><h3>Phone:</h3><a href="tel:+918252580536"> +91-8252580536</a></div>
            <div className="row2"><h3>Email:</h3><a href="mailto:mandhanmanmohan63@gmail.com"> mandhanmanmohan63@gmail.com</a></div>
            <div className="row3"><h3>Address:</h3> Jamshedpur, Jharkhand</div>
            <div className="row4"><h3>Postal:</h3> 831003</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Background