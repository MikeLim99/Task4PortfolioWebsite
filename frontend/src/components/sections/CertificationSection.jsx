import React, { useState } from 'react'
import {Colors} from '../../constants/Colors.js'
import useFetchCertificates from '../../hooks/certificate/useFetchCertificates.js'

function CertificationSection() {
    const {certificates} = useFetchCertificates()
    const [isImageOpen, setIsImageOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState('')

return (
    <>
    {certificates.map((cert, index) => (
    <div key={index} className='w-4/5 p-2 relative'>
            <div className='border-b h-[120px] flex'>
                <div className='w-[160px] h-[100px] bg-white rounded-md'>
                    <button type='button' onClick={() => { setSelectedImage(cert.CertImage); setIsImageOpen(true); }} className='w-full h-full'>
                        <img src={cert.CertImage} alt="Certification Sample" className='w-full h-full object-cover'/>
                    </button>
                </div>
                <div className='flex flex-col w-full mx-2'>
                    <h1>{cert.Title}</h1>
                    <h1 className='absolute right-10'>Issued By : {cert.Issuer}</h1>
                    <p>{cert.Description}</p>
                    <p className='absolute right-10 bottom-8'>Issued : {cert.IssueDate ? new Date(cert.IssueDate).toLocaleDateString() : 'No date indicated'}</p>
                </div>
            </div>
    </div>
    ))}

    {isImageOpen && selectedImage && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50' onClick={() => setIsImageOpen(false)} role="dialog" aria-modal="true">
            <div className='relative max-w-4xl' onClick={(event)=>event.stopPropagation()}>
                <img src={selectedImage} alt="" />
            </div>
        </div>
    )}
    </>
)
}

export default CertificationSection