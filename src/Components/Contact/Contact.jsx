import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="left">
          <span>Looking forward
            to working with
            everyone!</span>
        </div>
        <div className="right">
          <div className="container2">
            <span>Contact Me</span>
            <form action="/">
              <input type="text" name='name' placeholder='Your Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <input type="text" name='msg' placeholder='Your Message' required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact