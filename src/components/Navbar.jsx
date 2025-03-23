import React, { useState } from 'react';
import PrimaryButton from './utils/primaryButton';
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuLinks = [
    { title: "Home", url: '/' },
    { title: "About", url: '/about' },
    { title: "Process", url: '/process' },
    { title: "Portfolio", url: '/portfolio' },
    { title: "Blog", url: '/blog' },
    { title: "Services", url: '/services' },
  ];

  const [active, setActive] = useState(false);

  return (
    <nav className='py-5  lg:px-0'>
      <div className="container flex justify-between items-center">
        
        {/* Logo */}
        <div className="logo">
          <a href="#"><img src="/logo (1).png" alt="Logo" className='max-w-full' /></a>
        </div> 

        {/* Menu */}
        <div className={`menu ${!active ? 'invisible opacity-0' : 'visible opacity-100'} lg:visible lg:opacity-100 transition-all duration-300 fixed lg:static bg-gray-700/50 lg:bg-transparent inset-0 flex justify-end w-full lg:w-auto`}>
          <ul className={`relative justify-center lg:flex items-center gap-12 bg-white lg:bg-transparent h-full lg:h-auto max-w-3/4 lg:max-w-full p-8 lg:p-0 transition-all duration-500 origin-right ${!active ? 'scale-0' : 'scale-100'} lg:scale-100`}>
            
            {/* Close button for mobile */}
            <button 
              onClick={() => setActive(false)}
              className="closeBtn absolute right-6 lg:hidden text-xl text-red-500">
              <RxCross1 />
            </button>

            {menuLinks.map((link, index) => (
              <li key={index}>
               
              <Link  className='font-medium leading-[150%] text-[#333] my-3 inline-block' to={link.url}>{link.title}</Link>
              
              </li>


            ))}
          <li>
      <Link to="/contact">
      <PrimaryButton>Contact</PrimaryButton>
      </Link>
      </li>

          </ul>
        </div>  

        {/* Menu Icon */}
        <div className="icon text-end lg:hidden">
          <button onClick={() => setActive(true)} className='text-xl '>
            <IoMenu />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
