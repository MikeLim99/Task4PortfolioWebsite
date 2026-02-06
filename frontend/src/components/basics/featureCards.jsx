import React from 'react'
import { Link } from 'react-router'
import { useFetchProjects } from '../../hooks/useFetchProjects'

function FeatureCards({ limit }) {
    const { projects, loading, error } = useFetchProjects()

    const displayProjects = limit ? projects.slice(0, limit) : projects

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

  return (
    <>
    {(displayProjects.map((project) => (
    <Link className='w-[250px] h-[330px] bg-[#ECF0F1] text-[#2D3E50] flex flex-col items-center hover:scale-105 transition-transform rounded-md active:scale-100' to={`/projectdetails/${project._id}`} key={project._id}>
        <div className='w-[90%] m-3 h-[200px] bg-gray-300 rounded-md'>
            {project.images && project.images.length > 0 && (
              <img src={project.images[0]} alt={project.ProjectName} className='w-full h-full object-cover rounded-md' />
            )}
        </div>
        <h1 className='overflow-hidden px-3'>{project.ProjectName}</h1>
        {/* tags */}
        <div className='flex flex-wrap justify-center gap-2 mt-2 font-light text-[12px] overflow-hidden pb-5 h-[50px]'>
            {project.tags && project.tags.map((tag, index) => (
                <div key={index} className='bg-[#2D3E50] p-1 rounded-2xl min-w-[60px] text-center text-[#ECF0F1] mt-3'>
                    {tag}
                </div>
            ))}
        </div>
    </Link>
    )))}
    </>
  )
}

export default FeatureCards