import React from 'react'
import Navbar from "./components/Navbar"
import Banner from "./components/utils/Banner"
import Profile from "./components/Profile"
import WorkProcess from './components/utils/WorkProcess'
import Portfolio from './components/Portfolio'
import ProjectIdea from './components/ProjectIdea'
import Blog from './components/Blog'
import UserExperiance from './components/UserExperiance'
import HappyClient from './components/HappyClient'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Navbar/> 
    <Banner/>
    <Profile/>
    <WorkProcess/>
    <Portfolio/>
   <ProjectIdea />
   <Blog />
   <UserExperiance/>
   <HappyClient />
   <Testimonial/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default App
