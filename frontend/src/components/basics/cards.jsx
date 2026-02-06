import React from 'react'

const Cards = ({ Amount, Title }) => {
  return (
    <div className='w-[180px] h-[180px] bg-[#ECF0F1] text-[#2D3E50] rounded-ss-[50px] rounded-ee-[50px]'>
        <div className='flex flex-col h-full justify-center text-center'>
        <h2 className='h-[60%] text-[45px] font-bold flex items-center justify-center'>{Amount}</h2>
        <h2 className='h-[40%] text-[18px] flex items-center justify-center px-2'>{Title}</h2>
        </div>
    </div>
  )
}

export default Cards