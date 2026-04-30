import React from 'react'
import { Colors } from '../../constants/Colors'
function InputField({classStyle, PlaceHolder, Type, Name, Value, OnChange, Required = false}) {
  return (
    <div>
        <input name={Name} value={Value} type={Type} onChange={OnChange} style={{color:Colors.primary, backgroundColor: Colors.contrast}} className={`rounded-md p-2 ${classStyle}`} placeholder={PlaceHolder} required={Required}/>
    </div>
  )
}

export default InputField