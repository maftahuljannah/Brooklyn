import React from 'react'
import PrimaryButton from './primaryButton'
import ExperianceCard from './ExprianceCard'

function Banner() {
  return (
    <section id='banner' className='mt:[8px] lg:mt-[126px]'>
      <div className="container grid lg:grid-cols-2">
<div className="bannerCnt mt-[10px] order-last lg:order-first">
<h1 className='font-semibold leading-[117%] text-[32px] lg:text-[72px] text-gray-900'>Hello, I’m 
Brooklyn Gilbert</h1>
<p className='text-[18px] leading-[133%] text-gray-600 my-6'>I'm a Freelance <span className='text-gray-900'> UI/UX Designer</span> and <span className='text-gray-900'>Developer</span> based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
<PrimaryButton>Say Hellow</PrimaryButton>
<div className="experiance grid lg:grid-cols-3 gap-2 lg:mt-[142px] mt-4">
    <ExperianceCard counter={15} suffix={'y.'} title={'Experiance'}/>
    <ExperianceCard counter={250} suffix={'+'} title={'Project Completed'}/>
    <ExperianceCard counter={58} suffix={''} title={'Happy Client'}/>
</div>
</div>


<div className="bannerImg order-first lg:order-last">
<img src="/public/images/banner-1.png" alt="#" className='max-w-3/4 lg-mx-w-full mx-auto lg:ms-auto'/>
</div>
      </div>
    </section>
  )
}

export default Banner
