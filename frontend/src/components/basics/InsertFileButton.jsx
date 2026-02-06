import React, { useRef } from 'react'

function InsertFileButton({ Name = "file", Accept = "*", Multiple = false, Label = "Choose File", onChange }) {
  const inputRef = useRef(null)

  const handleFileChange = (e) => {
    if (onChange) {
      onChange(e.target.files)
    }
  }

  return (
    <>
      <input 
        ref={inputRef}
        type="file" 
        name={Name}
        accept={Accept}
        multiple={Multiple}
        onChange={handleFileChange}
        className='hidden'
      />
      <label
        onClick={() => inputRef.current?.click()}
        className='block bg-[#ECF0F1] text-[#2D3E50] p-4 rounded-lg w-[190px] text-center hover:scale-105 transition-transform active:scale-95 cursor-pointer'
      >
        {Label}
      </label>
    </>
  )
}

export default InsertFileButton