import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/navbar'
import Intro from './views/intro'
import About from './views/about'
import Experience from './views/experience'
import Projects from './views/projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Intro />
    <About />
    <Experience />
    <Projects />
  </React.StrictMode>,
)
