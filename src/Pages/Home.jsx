import React from 'react'
import Typewriter from 'typewriter-effect'
import CV from '../assets/Nati-CV-pdf.pdf'
import { Link } from 'react-router-dom'
import { AboutMe } from '../components/AboutMe'

export const Home = () => {
  return (
    <div className="home">
      <div className="title-wrapper">
        <h1> &lt; Hello World! &gt; </h1>
        <p>my name is Netanel (but everyone call's me Nati) </p>
      </div>
      <h3>I am a <Typewriter options={{ loop: true }} onInit={(typewriter) => {
        typewriter.typeString('React Developer')
          .pauseFor(2000)
          .deleteAll()
          .typeString('CSS & SASS Ninja')
          .pauseFor(2000)
          .deleteAll()
          .typeString('Fullstack Developer')
          .pauseFor(2000)
          .deleteAll()
          .typeString('Tennis player')
          .pauseFor(2000)
          .deleteAll()
          .start()
      }} /></h3>
      <div className="btn-wrraper flex">
        <a className='btn' href={CV} download>Download CV</a>
        <Link className='inverse-btn' to='/projects'>My Projects</Link>
      </div>
      <AboutMe />
    </div>
  )
}
