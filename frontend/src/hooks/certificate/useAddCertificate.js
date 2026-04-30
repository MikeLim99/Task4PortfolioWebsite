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
            const payload = new FormData();
            payload.append('Title', formData.Title || '');
            payload.append('Issuer', formData.Issuer || '');
            if (formData.IssueDate) payload.append('IssueDate', formData.IssueDate);
            payload.append('Description', formData.Description || '');
            if (formData.CertImage && formData.CertImage instanceof File) {
                payload.append('CertImage', formData.CertImage);
            }

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'}/api/certificates`,
                payload,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            toast.success("Certificate added successfully!");
            setFormData({});

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