import React from 'react'
import Navbar from '../components/navbar'
import FeatureCards from '../components/basics/featureCards'

const ProjectsPage = () => {
  return (
    <>
    <Navbar highlighted="projects" />
    {/* filter configuration */}
    <div className="flex justify-center gap-[97px] mb-6">
      <a href="#">All</a>
      <a href="#">Featured Projects</a>
      <a href="#">Personal Projects</a>
      <a href="#">Professional Projects</a>
      
    </div>
    <div className='flex justify-center w-full'>
      <div className="w-[90%] min-h-screen grid grid-cols-4 gap-[50px] p-10">
        <FeatureCards />
      </div>
    </div>
    <div className='w-full flex justify-center pb-10'>
      <h1>1 2 3 4 ... 10</h1>
    </div>
    </>

  )
}

export default ProjectsPage