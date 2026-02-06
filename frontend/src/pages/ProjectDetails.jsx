import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { useParams } from 'react-router'
import axios from 'axios';

function ProjectDetails() {
  const [project, setProject] = useState(null)
  const {id} = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/${id}`);
        console.log(response.data);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    }
    fetchProject();
  }, [id])
  return (
    <>
    <Navbar />
    <div className='min-h-screen w-full px-10'>
        <div>
          <h1 className='w-full text-center font-bold text-3xl my-5'>{project ? project.ProjectName : 'Loading...'}</h1>
        </div>
        {project && (
          <>
          <div className='flex flex-col gap-y-3'>
            <p>Project Description : {project.ProjectDescription}</p>
            <p>Assigned Position : {project.assignedPosition}</p>
            <p>Skills Acquired : {project.tags && project.tags.join(', ')}</p>
            <p>Link : <a href={project.projectLink}>{project.projectLink}</a></p>
            {/* Add more project details as needed */}
          </div>
          <div className='grid grid-cols-4 gap-5 my-10'>
            {project.images && project.images.map((img, index) => (
              <div key={index} className='w-[300px] h-[200px] bg-white'>
                <img src={img} alt={`Project Image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          </>
        )}
    </div>
    </>
  )
}

export default ProjectDetails