import React from 'react'
import Typewriter from 'typewriter-effect'


export const Home = () => {
  return (
    <div className="home">
      <div className="title-wrapper">
        <h1> &lt; Hello World! &gt; </h1>
        <p>my name is Netanel (but everyone call me Nati) </p>
      </div>
      <h3>I am a <Typewriter options={{loop: true}} onInit={(typewriter) => {
        typewriter.typeString('React Developer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('CSS & SASS Ninja')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Fullstack Engineer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Tennis Master (amateur level)')
        .pauseFor(2000)
        .deleteAll()
        .start()
      }} /></h3>

    </div>
  )
}
