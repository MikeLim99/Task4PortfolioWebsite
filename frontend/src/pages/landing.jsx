import React from 'react'
import Navbar from '../components/navbar'
import Logo from '../assets/unnamed.jpg'
import Button from '../components/basics/button'
import CV from '../assets/CurriculumVitaeV2.pdf'
import { FaArrowDown } from "react-icons/fa";
import Cards from '../components/basics/cards'
import FeaturedProject from '../components/sections/featuredProject'
import { useFetchProjects } from '../hooks/useFetchProjects'
import useFetchCertificates from '../hooks/certificate/useFetchCertificates'

const LandingPage = () => {
  const { projectCount } = useFetchProjects();
  const { certificateCount } = useFetchCertificates();
  return (
    <div>
      <Navbar highlighted="page" />

        <div className='flex justify-evenly items-center mt-20'>
          <div className='w-[40%]'>
            <div>
              <h1 className='text-[30px] font-semibold'>Hi, I am Michael!</h1>
              <h1 className='text-[25px] font-medium mb-5'>Web Developer | Web Designer</h1>
              <p className='text-justify'>Motivated Developer with practical experience in client service, currently  pursuing a BS in Information Technology. Certified in Python and C++ through  Cisco and PHP through AMA University, I bring strong troubleshooting abilities and  a collaborative mindset. Passionate about leveraging digital innovation to  enhance business operations.</p>
            </div>
            <div className='flex gap-20 mt-10 justify-center'>
              <Button Title="Download CV" Link={CV} Download={true} />
              <Button Title="Browse Projects" Link="/projects" />
            </div>
          </div>
          <div className='w-[30%]'>
            <img src={Logo} alt="Logo" className='rounded-full'/>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 mb-5 mt-20 animate-bounce'>
        <a href="#down">Learn more</a>
        <FaArrowDown />
        </div>
        <div className='bg-[#7E8C8D] h-[285px] p-10 flex justify-evenly items-center' id='down'>
          <Cards Amount={certificateCount} Title="Certificates & Awards" />
          <Cards Amount={projectCount} Title="Projects Completed" />
          <Cards Amount="1" Title="Years of Experience" />
        </div>
        <FeaturedProject />
    </div>
  )
}

export default LandingPage