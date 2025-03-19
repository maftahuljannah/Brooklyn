import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className='border border-gray-50 rounded-lg shadow-blog overflow-hidden'>
     <img className='w-full block' src={blog.image} alt="" /> 
    <div className='p-6'>
    <p className='text-sm leading-[143%] text-gray-400'>{blog.title}</p>
    <a href="" className='text-[13px] lg:text-lg leading-[133%] text-[#333] font-medium mt-2 block'>{blog.details}</a>
    </div>
    </div>
  )
}

export default BlogCard
