import React from 'react'
import Heading from './utils/Heading'
import PrimaryButton from './utils/primaryButton'
import { FaArrowRight } from "react-icons/fa";


const ProjectIdea = () => {
  return (
    <section className="bg-gray-900 py-25">
      <div className="content">
        <Heading className="text-white text-3xl lg:text-[48px] text-center">Do you have a Project Idea? <br /> Let's discuss your project!</Heading>
        <p className='text-gray-300 text-[14px] lg:text-lg text-center leading-[133%] font-normal mt-[32px]'>There are many variations of passages of Lorem Ipsum available, <br />
        but the majority have suffered alteration.</p>

        <PrimaryButton className='flex justify-center items-center gap-6 m-auto mt-[32px]'>Let’s work Together <FaArrowRight className="mt-0.5" /></PrimaryButton>
      </div>
    </section>
  )
}

export default ProjectIdea
