import React from 'react'
import { Colors } from '../../constants/Colors'
function InputField({classStyle, PlaceHolder, Type, OnChange}) {
  return (
    <div>
        <input type={Type} onChange={OnChange} style={{color:Colors.primary, backgroundColor: Colors.contrast}} className={`rounded-md p-2 ${classStyle}`} placeholder={PlaceHolder}/>
    </div>
  )
}

export default InputField