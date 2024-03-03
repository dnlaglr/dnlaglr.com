import React from 'react'
import { Article, GitHub, LinkedIn, Mail } from '@mui/icons-material'

import ResumePDF from '../assets/Daniel_Aguilar_Resume.pdf'

function Navbar() {
  return (
    <nav className='flex justify-center items-center w-screen bg-dark px-4 py-2'>
      <div className='flex flex-row justify-center items-center w-[90%] lg:w-[80%]'>
        <a href='/' className='text-xl text-accent font-bold mr-4'>Daniel Aguilar</a>
        <div className='flex flex-1 flex-row justify-between items-center'>
          <div className='flex flex-row text-base text-accent font-bold'>
            <a href='#intro' className=' p-2'>Home</a>
            <a href='#about' className='p-2'>About</a>
            <a href='#experience' className='p-2'>Experience</a>
            <a href='#projects' className='p-2'>Projects</a>
          </div>
          <div className='flex flex-row'>
            <a href='mailto:aglrdnl@gmail.com' className='p-2'>
              <Mail className='text-base text-accent' />
            </a>
            <a href='https://github.com/dnlaglr' target='_blank' className='p-2'>
              <GitHub className='text-base text-accent' />
            </a>
            <a href='https://www.linkedin.com/in/aglrdnl/' target='_blank' className='p-2'>
              <LinkedIn className='text-base text-accent' />
            </a>
            <a href={ResumePDF} target='_blank' className='p-2'>
              <Article className='text-base text-accent' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar