import React from 'react'
import Navbar from '../components/navbar'
import myImage from '../assets/unnamed.jpg'
import Button from '../components/basics/button'
import SkillsCards from '../components/basics/SkillsCards'
import CertificationSection from '../components/sections/CertificationSection'

const AboutPage = () => {
  return (
    <div className='min-h-screen'>
      {/* First Section starts here */}
      <Navbar highlighted="aboutme" />
      <div className='w-full flex justify-center gap-10'>
        <div className='w-1/2 flex flex-col justify-start ml-20 p-5 gap-8'>
          <h1 className='text-center w-full text-4xl font-bold'>About Me</h1>
            <div className='flex'>
              <h2 className='w-1/4'>Name</h2>
              <p>: Michael Angelo E. Lim</p>
            </div>
            <div className='flex'>
              <h2 className='w-1/4'>Age</h2>
              <p>: 27</p>
            </div>
            <div className='flex'>
              <h2 className='w-1/4'>Email</h2>
              <p>: michaelangelolim.hs@gmail.com</p>
            </div>
            <p className='text-justify'>I am a Web Developer with proficiency in both Front-end and Back-end I can do Full stack. I am also a team player, I also have sense of urgency this helps me manage my tasks on time.</p>
        </div>
        <div className='w-1/2 flex flex-col items-center mr-20 p-5 gap-5'>
          <img src={myImage} alt="My Image" className="rounded-lg w-[360px]" />
          <Button Title="Download CV" Link="/Michael_Angelo_Lim_CV.pdf" Download={true} />
        </div>
      </div>
      {/* First Section ends here */}

      {/* This is Spacer */}
      <div className='w-[80%] border-t mx-auto my-15'>
      </div>
      {/* This is Spacer */}

      {/* Second Section starts here */}
      <h1 className='w-full text-center mb-15 text-5xl'>Technical & Soft Skills</h1>
      <div className='w-full flex justify-center'>
        <div className='w-[80%] flex justify-center mb-20'>
          <SkillsCards />
        </div>
      </div>
      {/* Second Section Ends here */}

      {/* This is Spacer */}
      <div className='w-[80%] border-t mx-auto my-15'>
      </div>
      {/* This is Spacer */}

      {/* Third Section starts here */}
      <h1 className='w-full text-center mb-15 text-5xl'>Certification & Awards</h1>
      <div className='w-[80%] h-[600px] flex flex-col items-center mb-10 border border-gray-300 rounded-md mx-auto overflow-auto'>
        <CertificationSection />
        <CertificationSection />
        <CertificationSection />
        <CertificationSection />
        <CertificationSection />
        <CertificationSection />
        <CertificationSection />
        <CertificationSection />
        <CertificationSection />
      </div>
    </div>
  )
}

export default AboutPage