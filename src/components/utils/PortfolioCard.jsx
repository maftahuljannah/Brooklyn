import React from 'react';
import PrimaryButton from './primaryButton';
import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-md mb-4" />  
      <p className="text-sm text-gray-500 uppercase">{data.category}</p> 
      <h3 className="text-lg font-semibold my-2">{data.title}</h3>
      <p className="text-gray-600 mb-4">{data.description}</p>
      <PrimaryButton className='flex items-center justify-center gap-3 bg-transparent border border-primary-600 !text-primary-600'>
        Case Study <FaArrowRight />
      </PrimaryButton>
    </div>
  );
};

export default PortfolioCard;
