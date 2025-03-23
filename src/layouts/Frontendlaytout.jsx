import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const Frontendlaytout = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>  
    </>
  )
}

export default Frontendlaytout
