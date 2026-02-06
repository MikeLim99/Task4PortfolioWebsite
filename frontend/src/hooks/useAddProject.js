import React, { useState } from 'react'
import axios from 'axios'

export default function useAddProject(){
    const [error, setError ] = useState(null)
    const [success, setSuccess ] = useState(null)
    const [formData, setFormData ] = useState({})

    const handleSubmit = async (e, uploadedFiles = []) => {
        e.preventDefault();
        setError(null)
        setSuccess(null)
        
        console.log('Form submitted with files:', uploadedFiles);
        console.log('Current formData:', formData);
        
        try {
            let imageUrls = [];

            // Upload images first if there are any
            if (uploadedFiles && uploadedFiles.length > 0) {
                console.log('Uploading images...');
                const imageFormData = new FormData();
                uploadedFiles.forEach((file) => {
                    imageFormData.append('images', file);
                });

                const imageResponse = await axios.post(`http://localhost:3000/api/uploadImages`, imageFormData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                imageUrls = imageResponse.data.imageUrls || [];
                console.log('Received image URLs:', imageUrls);
            }

            // Then submit project data with image URLs
            const projectData = {
                ...formData,
                images: imageUrls
            };
            
            console.log('Submitting project data:', projectData);

            const response = await axios.post(`${API_BASE_URL}/api/createProject`, projectData);
            if(response.status === 200 || response.status === 201){
                console.log("Project added successfully:", response.data);
                setSuccess("Project added successfully!");
                setFormData({});
            } else {
                console.error("Failed to add project:", response.data);
                setError("Failed to add project");
            }
        } catch (error) {
            console.error("Error adding project:", error);
            setError(error.response?.data?.message || error.message || "Error adding project");
        }
    }
  return { 
    handleSubmit, 
    error,
    success,
    formData,
    setFormData
}
}

