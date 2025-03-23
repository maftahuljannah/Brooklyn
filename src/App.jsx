import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import About from './pages/About';
import Process from './pages/Process';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import Frontendlaytout from './layouts/Frontendlaytout';
import ContactPage from './pages/ContactPage';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
    <Route element={<Frontendlaytout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/process' element={<Process/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      
    </Route>

    <Route path="*" element={<Page404 />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;