import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 pt-[192px] pb-[82px] relative">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/public/footerLogo.png" alt="Logo" className="w-[208px] h-[56px]" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-50">
          <li><a href="#" className="hover:text-gray-400 transition">About</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Services</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Process</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Portfolio</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Blog</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
        </ul>

        {/* Copyright */}
        <p className="text-gray-white text-sm">Copyright © 2022 Picto.</p>
      </div>
    </footer>
  );
};

export default Footer;
