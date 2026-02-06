import React from 'react'
import {Colors} from '../../constants/Colors.js'

function CertificationSection() {

return (
    <div className='w-4/5 p-2 relative'>
            <div className='border-b h-[120px] flex'>
                <div className='w-[160px] h-[100px] bg-white rounded-md'>
                    <img src="https://www.certifymeonline.com/wp-content/uploads/2020/03/sample-certificate.png" alt="Certification Sample" className='w-full h-full object-contain'/>
                </div>
                <div className='flex flex-col w-full mx-2'>
                    <h1>title</h1>
                    <p>description</p>
                    <p className='absolute right-10 bottom-8'>date</p>
                </div>
            </div>
    </div>
)
}

export default CertificationSection