import React from 'react'
import FeaturedCards from '../basics/featureCards.jsx'
import Button from '../basics/button'

function FeaturedProject() {
  return (
    <div className='flex flex-col justify-center items-center m-10'>
        Featured Projects
        <div className='flex justify-evenly w-[80%] mt-10 mb-20'>
            <FeaturedCards limit={3} />
        </div>
        <Button Title="Project Gallery" Link="/projects" />
    </div>
  )
}

export default FeaturedProject