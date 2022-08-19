import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navigation = () => {

  const [isLinksOpen, setIsLinksOpen] = useState(false)

  return (
    <>
    <nav className='flex'>
      <div className="burger flex column" onClick={() => setIsLinksOpen(!isLinksOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to='/'><h3>Netanel<br />Nadav</h3></Link>
    </nav>
    <div className={`links flex justify-center align-center ${isLinksOpen ? 'open' : ''}`}>
      <ul className='clean-list flex'>
        <li><NavLink to={'/'} onClick={() => setIsLinksOpen(!isLinksOpen)}>Home</NavLink></li>
        <li><NavLink to={'/projects'} onClick={() => setIsLinksOpen(!isLinksOpen)}>Projects</NavLink></li>
        <li><NavLink to={'/contact'} onClick={() => setIsLinksOpen(!isLinksOpen)}>Contact</NavLink></li>
      </ul>
    </div>
    </>
  )
}
