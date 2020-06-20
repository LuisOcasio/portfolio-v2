import React from 'react'
import header from '../images/luluport_SVG/royalblueHeader.svg'
import myself from '../images/luluport_SVG/lulu.svg'

const About = () => {
  return (
    <div className='about'>
      <img src={header} alt='blue header svg' />
      <div className='main_about'>ABOUT ME</div>

      <div className='about_content'>
        <div className='pic_container'>
          <img className='me' src={myself} alt='image of luis' />
        </div>
        <div className='about_me'>
          <h3>A LITTLE ABOUT ME</h3>
          <div className='about_description'>
            <p>WEB DEVELOPER</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
