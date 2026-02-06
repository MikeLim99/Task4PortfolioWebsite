import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchProjects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const projectCount = projects.length;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true)
                const response = await axios.get('http://localhost:3000/api/')
                console.log(response.data)
                setProjects(response.data)
                setError(null)
            } catch (error) {
                console.error('Error fetching projects:', error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProjects()
    }, [])

    return { projects, loading, error, projectCount }
}
