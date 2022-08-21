import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './Pages/Home'
import { ProjectDetails } from './Pages/ProjectDetails'
import { Projects } from './Pages/Projects'


export const App = () => {


  return (
    <div className='app'>
      <div className="main-container">
        <Navigation />
        <main>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/:id'} element={<ProjectDetails/>} />
            <Route path={'/projects'} element={<Projects />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}