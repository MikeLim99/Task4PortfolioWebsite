import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function useAddCertificate() {
    const [ formData, setFormData ] = useState({})
    const [ error, setError ] = useState(null)
    const [ success, setSuccess ] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null)
        setSuccess(null)

        try {
            let imageUrl = '';
            
            // Step 1: Upload the image file if one was selected
            if (formData.CertImage && formData.CertImage instanceof File) {
                const imageFormData = new FormData();
                imageFormData.append('images', formData.CertImage);

                const uploadResponse = await axios.post(
                    'http://localhost:3000/api/uploadImages',
                    imageFormData,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    }
                );

                if (uploadResponse.data.imageUrls && uploadResponse.data.imageUrls.length > 0) {
                    imageUrl = uploadResponse.data.imageUrls[0];
                }
            }

            // Step 2: Send certificate data with the image URL
            const certificateData = {
                Title: formData.Title,
                Issuer: formData.Issuer,
                IssueDate: formData.IssueDate,
                Description: formData.Description,
                CertImage: imageUrl // Send the URL, not the File object
            };


            // if(response.status === 200 || response.status === 201){
            //     console.log("Certificate added successfully:", response.data);
            //     setSuccess("Certificate added successfully!");
            //     setFormData({});
            // } else {
            //     console.error("Failed to add certificate:", response.data);
            //     setError("Failed to add certificate");
            // }

            try {
                const response = await axios.post('http://localhost:3000/api/certificates',certificateData);
                toast.success("Certificate added successfully!");
            } catch (error) {
                toast.error("Error adding certificate");
            }

        } catch (error) {
            console.error("Error adding certificate:", error);
            setError(error.response?.data?.message || "Error adding certificate");
        }
    }
    return {
        handleSubmit,
        formData,
        setFormData,
        error,
        success
    }
}