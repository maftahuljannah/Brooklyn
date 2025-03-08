import React from 'react';
import Heading from './utils/Heading';
import Details from './utils/Details';
import PortfolioCard from './utils/PortfolioCard';

const portfolioData = [
  {
    id: 1,
    image: '/public/images/p-1.png',
    category: 'UI-UX DESIGN',
    title: 'Product Admin Dashboard',
    description: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
  },
  {
    id: 2,
    image: '/public/images/p-2.png',
    category: 'Web Development',
    title: 'Product Admin Dashboard',
    description: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
  },
  {
    id: 3,
    image: '/public/images/p-3.png',
    category: 'Mobile App',
    title: 'Product Admin Dashboard',
    description: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
  },
  {
    id: 4,
    image: '/public/images/p-4.png',
    category: 'Branding',
    title: 'Product Admin Dashboard',
    description: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
  },
  {
    id: 5,
    image: '/public/images/p-5.png',
    category: 'Graphic Design',
    title: 'Product Admin Dashboard',
    description: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
  },
  {
    id: 6,
    image: '/public/images/p-6.png',
    category: 'Marketing',
    title: 'Product Admin Dashboard',
    description: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
  }
];

const Portfolio = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-12">
        <Heading className="text-[48px] leading-[117%] text-center">Portfolio</Heading>
        <Details className="text-gray-400 text-center mb-8">
          There are many variations of passages of Lorem Ipsum available,<br />
          but the majority have suffered alteration.
        </Details>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
