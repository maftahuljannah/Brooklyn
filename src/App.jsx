import React from 'react'
import Navbar from "./components/Navbar"
import Banner from "./components/utils/Banner"
import Profile from "./components/Profile"
import WorkProcess from './components/utils/WorkProcess'
import Portfolio from './components/Portfolio'
function App() {
  return (
    <>
    <Navbar/> 
    <Banner/>
    <Profile/>
    <WorkProcess/>
    <Portfolio/>
    </>
  )
}

export default App
