import React from 'react'

function SkillsCards() {
  return (
    <div className='grid grid-cols-6 gap-x-20 gap-y-10'>
        <div>
        <div className='w-[120px] h-[120px] bg-[#ECF0F1] rounded-lg flex justify-center items-center shadow-lg hover:scale-105 transition-transform active:scale-95'>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML Icon" className='w-full h-full object-contain'/>
        </div>
        <h2 className='text-center'>HTML</h2>
        </div>
        <div>
        <div className='w-[120px] h-[120px] bg-[#ECF0F1] rounded-lg flex justify-center items-center shadow-lg hover:scale-105 transition-transform active:scale-95'>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS Icon" className='w-full h-full object-contain'/>
        </div>
        <h2 className='text-center'>CSS</h2>
        </div>
        <div>
        <div className='w-[120px] h-[120px] bg-[#ECF0F1] rounded-lg flex justify-center items-center shadow-lg hover:scale-105 transition-transform active:scale-95'>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript Icon" className='w-full h-full object-contain'/>
        </div>
        <h2 className='text-center'>JavaScript</h2>
        </div>
        <div>
        <div className='w-[120px] h-[120px] bg-[#ECF0F1] rounded-lg flex justify-center items-center shadow-lg hover:scale-105 transition-transform active:scale-95'>
            <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React Icon" className='w-full h-full object-contain'/>
        </div>
        <h2 className='text-center'>React</h2>
        </div>
        <div>
        <div className='w-[120px] h-[120px] bg-[#ECF0F1] rounded-lg flex justify-center items-center shadow-lg hover:scale-105 transition-transform active:scale-95'>
            <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="NodeJS Icon" className='w-full h-full object-contain'/>
        </div>
        <h2 className='text-center'>NodeJS</h2>
        </div>
        <div>
        <div className='w-[120px] h-[120px] bg-[#ECF0F1] rounded-lg flex justify-center items-center shadow-lg hover:scale-105 transition-transform active:scale-95'>
            <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="MySQL Icon" className='w-full h-full object-contain'/>
        </div>
        <h2 className='text-center'>MySQL</h2>
        </div>
    </div>
  )
}

export default SkillsCards