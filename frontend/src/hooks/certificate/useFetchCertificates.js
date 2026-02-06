import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchCertificates(){
    const [ certificates, setCertificates ] = useState([])
    const certificateCount = certificates.length;

    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/certificates')
                setCertificates(response.data)
            } catch (error) {
                console.error("Error fetching certificates:", error)
            }
        }

        fetchCertificates()
    }, [])

    return { certificates, certificateCount };
}