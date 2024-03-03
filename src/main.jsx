import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/navbar'
import Intro from './views/intro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Intro />
  </React.StrictMode>,
)
