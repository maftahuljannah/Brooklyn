import React from 'react'

const Input = ({type = 'text', name, placeholder,className}) => {
  return (
    
    <input 
     type={type}
     name={name}
    className={`w-full border-b text-gray-500 text-lg border-gray-100 h-[38px] outline-0
     focus:border-primary-500 focus:text-primary-500 my-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${className}`} 
    placeholder={placeholder} />
    
  )
}

export default Input
