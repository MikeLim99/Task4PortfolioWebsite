import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';

export default function useAddProject(){
    const [error, setError ] = useState(null)
    const [success, setSuccess ] = useState(null)
    const [formData, setFormData ] = useState({})

    const handleSubmit = async (e, uploadedFiles = []) => {
        e.preventDefault();
        setError(null)
        setSuccess(null)
        
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

            try {
                const response = await axios.post(`http://localhost:3000/api/createProject`, projectData);
                toast.success("Project added successfully!");
            } catch (error) {
                toast.error("Error adding project");
            }
        } catch (error) {
            toast.error("Error uploading images or adding project");
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

