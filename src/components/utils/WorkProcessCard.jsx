import React from 'react'
import Details from './Details'

const WorkProcessCard = ({icon, title, detail}) => {
  return (
    <div className='bg-white p-8 rounded-xl'>
    <img src={icon} alt={title} className='max-w-[72px] max-h-[72px]'/>  
    <h3 className='mt-4 mb-3 text-gray-900 text-xl leading-[120%] font-semibold '>{title}</h3>
    <Details>{detail}</Details>
    </div>
  )
}

export default WorkProcessCard
