import React from 'react'
import { Link } from 'react-router'

const Page404 = () => {
  return (
    <div className='h-screen grid place-items-center'>
   <Link to='/'>
   <img src="https://wpsurfer.com/wp-content/uploads/2021/12/404-page-700x363.webp" alt="" /> 
   
   </Link> 
    </div>
  )
}

export default Page404
