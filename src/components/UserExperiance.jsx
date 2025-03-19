import React from 'react'
import Heading from './utils/Heading'
import Details from './utils/Details'
import PrimaryButton from './utils/primaryButton'

const UserExperiance = () => {
  return (
    <section className='bg-[#F0F1F3] py-16 lg:pb-[120px] lg:pt-[120px]'>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-[143px] items-center">


 {/* Left Side Content */}
 <div className="userCnt text-center md:text-left">
          <Heading className="!text-4xl lg:!text-5xl">What I do?</Heading>
          <Details className="pt-6 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
          </Details>  
          <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
          </Details>

          <PrimaryButton className='mt-[50px]'>Say Hello!</PrimaryButton>
        </div>



        {/* Right Side Cards */}
        <div className="WorkProcessCard flex flex-col gap-6">
  <div className="card p-8 bg-white rounded-[6px] border-l-4 border-transparent shadow-sm transition-all duration-300 hover:border-primary-500 hover:shadow-lg">
    <h3 className='font-semibold text-2xl leading-[100%] text-gray-900'>User Experience (UX)</h3>
    <p className='font-normal text-[16px] leading-[150%] text-gray-700 mt-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
    </p>
  </div>

  <div className="card p-8 bg-white rounded-[6px] border-l-4 border-transparent shadow-sm transition-all duration-300 hover:border-primary-500 hover:shadow-lg">
    <h3 className='font-semibold text-2xl leading-[100%] text-gray-900'>User Interface (UI)</h3>
    <p className='font-normal text-[16px] leading-[150%] text-gray-700 mt-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
    </p>
  </div>

  <div className="card p-8 bg-white rounded-[6px] border-l-4 border-transparent shadow-sm transition-all duration-300 hover:border-primary-500 hover:shadow-lg">
    <h3 className='font-semibold text-2xl leading-[100%] text-gray-900'>Web Development</h3>
    <p className='font-normal text-[16px] leading-[150%] text-gray-700 mt-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
    </p>
  </div>
</div>

        </div>
      
    </section>
  )
}

export default UserExperiance
