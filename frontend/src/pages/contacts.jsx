import React from 'react'
import Navbar from '../components/navbar'
import Button from '../components/basics/button'


const  ContactsPage = () => {
  return (
    <div className='min-h-screen'>
      <Navbar highlighted="contacts" />
      <div className='w-full flex justify-center px-4'>
        <div className='w-full md:w-5/6 lg:w-4/5 xl:w-3/4 my-5 border rounded-lg bg-[#ECF0F1] text-[#2D3E50] shadow-lg flex gap-5 p-4 md:p-6 lg:p-8 flex-col items-center'>
        <h1 className='text-2xl md:text-3xl lg:text-[30px] font-semibold'>Contact Me</h1>
          <div className='flex flex-col md:flex-row h-full rounded-lg w-full gap-6 md:gap-8 lg:gap-10'>
            <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-5'>
              <div className='flex gap-3 md:gap-4 lg:gap-5 items-start'>
                <div className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#2D3E50] rounded-full flex-shrink-0'></div>
                <div className='flex flex-col'>
                  <p className='font-semibold text-sm md:text-base'>Address</p>
                  <p className='text-sm md:text-base'>Quezon city, Philippines</p>
                </div>
              </div>
              <div className='flex gap-3 md:gap-4 lg:gap-5 items-start'>
                <div className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#2D3E50] rounded-full flex-shrink-0'></div>
                <div className='flex flex-col'>
                  <p className='font-semibold text-sm md:text-base'>Phone</p>
                  <p className='text-sm md:text-base'>+63 948 586 0507</p>
                </div>
              </div>
              <div className='flex gap-3 md:gap-4 lg:gap-5 items-start'>
                <div className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#2D3E50] rounded-full flex-shrink-0'></div>
                <div className='flex flex-col'>
                  <p className='font-semibold text-sm md:text-base'>Email</p>
                  <p className='text-sm md:text-base break-all'>michaelangelolim.hs@gmail.com</p>
                </div>
              </div>

            </div>
            <div className='w-full md:w-1/2 bg-[#2D3E50] rounded-lg flex flex-col items-center p-4 md:p-5 lg:p-6 gap-6 md:gap-8 lg:gap-[40px]'>
              <h1 className='text-[#ECF0F1] text-xl md:text-2xl lg:text-[25px] font-light'>Send a Message</h1>
              <input type="text" placeholder='Name' className='border-b w-[90%] md:w-[85%] lg:w-[80%] text-[#ECF0F1] bg-transparent focus:outline-none py-2 placeholder:text-gray-300'/>
              <input type="text" placeholder='Email' className='border-b w-[90%] md:w-[85%] lg:w-[80%] text-[#ECF0F1] bg-transparent focus:outline-none py-2 placeholder:text-gray-300'/>
              <textarea placeholder='Your Message' className='border-b w-[90%] md:w-[85%] lg:w-[80%] text-[#ECF0F1] bg-transparent focus:outline-none py-2 placeholder:text-gray-300 resize-none' rows="4"/>
              <Button Title="Send Message" Link="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage