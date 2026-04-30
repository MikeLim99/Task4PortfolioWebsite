import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';

export default function useAddProject(){
    const [error, setError ] = useState(null)
    const [success, setSuccess ] = useState(null)
    const [formData, setFormData ] = useState({})

    const handleChange = (e) => {
        const {name, value, type, files} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null)
        setSuccess(null)
        try {
            const payLoad = new FormData();
            payLoad.append('ProjectName', formData.ProjectName || '');
            payLoad.append('ProjectDescription', formData.ProjectDescription || '');
            payLoad.append('assignedPosition', formData.assignedPosition || '');
            payLoad.append('projectLink', formData.projectLink || '');

            if (Array.isArray(formData.tags)) {
                formData.tags.forEach((tag) => payLoad.append('tags', tag));
            }

            if (formData.image) {
                payLoad.append('image', formData.image);
            }

            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'}/api/createProject`,
                payLoad,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )

            toast.success('Project added successfully!')
            setSuccess('Project added successfully!')
            setFormData({
                ProjectName: '',
                ProjectDescription: '',
                tags: [],
                assignedPosition: '',
                projectLink: '',
                image: null
            })
        } catch (error) {
            const message = error.response?.data?.message || 'Error adding project';
            setError(message)
            toast.error(message)
            console.error("Error adding project:", error);
        }
    }

  return { 
    handleSubmit, 
    error,
    success,
    formData,
    setFormData,
    handleChange
}
}

