import React from 'react'
import { Link } from 'react-router';


const Navbar = ({ highlighted }) => {
  const activeClass = 'rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white text-[18px]';
  const inactiveClass = 'rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 hover:text-white text-[18px]';
  return (

    //navbar goes here
<div className='w-full h-[114px] flex justify-around bg-[#2D3E50] text-[#ECF0F1]'>
    <div className='w-1/4 flex items-center gap-5 pl-10 '>
        <Link to="/"><h1>My Portfolio</h1></Link>
    </div>
    <div className='w-3/4 flex justify-end items-center gap-10 pr-20'>
        <Link aria-current={highlighted} className={highlighted === "page" ? activeClass : inactiveClass} to="/">Home</Link>
        <Link aria-current={highlighted} className={highlighted === "contacts" ? activeClass : inactiveClass} to="/contacts">Contacts</Link>
        <Link aria-current={highlighted} className={highlighted === "aboutme" ? activeClass : inactiveClass} to="/aboutme">About me</Link>
        <Link aria-current={highlighted} className={highlighted === "projects" ? activeClass : inactiveClass} to="/projects">Projects</Link>
    </div>
</div>
  )
}

export default Navbar