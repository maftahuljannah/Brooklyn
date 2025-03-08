import React from 'react'
import CountUp from 'react-countup';

function ExprianceCard({counter, suffix, title}) {
  return (
    <div className='py-4 bg-[#EDD8FF] text-center'>
    
    < CountUp 
    end={counter}
    duration={3.75}
      suffix={suffix}
    className='font-semibold text-gray-700 leading-[125%] text-[32px]'
     />
    <p className='leading-[150%] text-gray-500'>{title}</p>
    </div>
  )
}

export default ExprianceCard
