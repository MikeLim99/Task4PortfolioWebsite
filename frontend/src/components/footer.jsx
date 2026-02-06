import React from 'react'
import fbIcon from '../assets/icons/facebook.png'
import githubIcon from '../assets/icons/github.png'
import linkedinIcon from '../assets/icons/linkedin.png'
import gmailIcon from '../assets/icons/gmail.png'

function Footer() {
  return (
    <div className='bg-[#7E8C8D] h-[285px]'>
      <div className='text-white text-center pt-20'>
        <h1>Social Media Links</h1>
        <div className='w-full flex justify-center gap-10 p-10'>
          <a href="https://www.facebook.com/MichaelAngeloLim2799"><img src={fbIcon} alt="Facebook" className='w-12'/></a>
          <a href="https://github.com/MikeLim99"><img src={githubIcon} alt="GitHub" className='w-12'/></a>
          <a href="www.linkedin.com/in/michael-angelo-lim-0a1b38300"><img src={linkedinIcon} alt="LinkedIn" className='w-12'/></a>
          <a href="/contacts"><img src={gmailIcon} alt="Gmail" className='w-12'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer