import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function PageNotFound() {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen flex items-center justify-center text-[48px] font-bold'>
            Error 404: Page Not Found...
        </div>
        <Footer />
    </div>
  )
}

export default PageNotFound