import React from 'react'
import me from '../assets/imgs/me.jpg'

export const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="wrraper flex align-center column">
                <div className="border"></div>
                <div className="img-container">
                    <img src={me} alt="Netanel Nadav" />
                </div>
                <div className="details-container">
                    <h1>About Me</h1>
                    <p>My name is netanel nadav, i'm 30 years old with a Master Degree in digital communication. i've worked 3 years in a startup as a Marketer & PPC Specaliest and i decided to take my skills to the next level. thats why i started learning Code so i can make good idea's come true!</p>
                </div>
            </div>
        </div>
    )
}
