import React from 'react'

function Button({ Title, Link, Download, submitBtn = false }) {
  return (
    <>
    {submitBtn ? 
      <button type="submit" className='bg-[#ECF0F1] text-[#2D3E50] p-4 rounded-lg w-[190px] text-center hover:scale-105 transition-transform active:scale-95'>{Title}</button>  
      : 
      <a href={Link} download={Download} className='bg-[#ECF0F1] text-[#2D3E50] p-4 rounded-lg w-[190px] text-center hover:scale-105 transition-transform active:scale-95'>{Title}</a>
    }
    </>
  )
}

export default Button