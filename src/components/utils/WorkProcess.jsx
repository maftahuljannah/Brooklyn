import React from 'react'
import Heading from './Heading'
import Details from './Details'
import WorkProcessCard from './WorkProcessCard'

const WorkProcess = () => {
  return (
    <section className='bg-[#F0F1F3] py-16 lg:pb-[140px] lg:pt-[248px]'>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-[143px] items-center ">
        
        {/* Left Side Content */}
        <div className="workProcessCnt text-center md:text-left">
          <Heading className="!text-4xl lg:!text-5xl">Work Process</Heading>
          <Details className="pt-6 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
          </Details>  
          <Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
          </Details>
        </div>

        {/* Right Side Cards */}
        <div className="WorkProcessCard grid gap-6 md:grid-cols-2">
          {/* First Row */}
          <div className="firstrow grid gap-6">
            <WorkProcessCard 
              icon="/public/images/fram-1.png"
              title="1. Research"
              detail="I conduct thorough research to understand your needs and audience."
            />
            <WorkProcessCard 
              icon="/public/images/fram-2.png"
              title="2. Analyze"
              detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
          </div>

          {/* Second Row */}
          <div className="lastrow grid gap-6 mt-6">
            <WorkProcessCard 
              icon="/public/images/fram-3.png"
              title="3. Design"
              detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
            <WorkProcessCard 
              icon="/public/images/fram-4.png"
              title="4. Launch"
              detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default WorkProcess
