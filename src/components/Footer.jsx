import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 pt-[80px] lg:pt-[192px] pb-[40px] lg:pb-[82px] relative">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/footerLogo.png" alt="Logo" className="w-[160px] lg:w-[208px] h-[40px] lg:h-[56px]" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 text-gray-50">
          <li><a href="#" className="hover:text-gray-400 transition">About</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Services</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Process</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Portfolio</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Blog</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
        </ul>

        {/* Copyright */}
        <p className="text-gray-50 text-xs lg:text-sm">Copyright © 2022 Picto.</p>
      </div>
    </footer>
  );
};

export default Footer;
