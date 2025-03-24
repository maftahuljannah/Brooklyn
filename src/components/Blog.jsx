import React from 'react'
import Heading from './utils/Heading'
import Details from './utils/Details'
import BlogCard from './utils/BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Blog = () => {
    const blogobj = [
      {
        id:'1',
        image: '/blog-1.png',
        title: '22 Oct, 2020/246 Comments',
        details: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
        url:'#',
    
      },
      {
        id:'2',
        image: '/blog-2.png',
        title: '22 Oct, 2020/246 Comments',
        details: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
        url:'#',
    
      },
      {
        id:'3',
        image: '/blog-3.png',
        title: '22 Oct, 2020/246 Comments',
        details: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
        url:'#',
    
      },
      {
        id:'4',
        image: '/blog-4.png',
        title: '22 Oct, 2020/246 Comments',
        details: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
        url:'#',
    
      },
      {
        id:'5',
        image: '/blog-1.png',
        title: '22 Oct, 2020/246 Comments',
        details: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
        url:'#',
    
      },
      {
        id:'6',
        image: '/blog-2.png',
        title: '22 Oct, 2020/246 Comments',
        details: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
        url:'#',
    
      },
      {
        id:'7',
        image: '/blog-3.png',
        title: '22 Oct, 2020/246 Comments',
        details: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
        url:'#',
    
      },
      {
        id:'8',
        image: '/blog-4.png',
        title: '22 Oct, 2020/246 Comments',
        details: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
        url:'#',
    
      },

    ]
       

  return (
    <section id='blogs' className='blog-section py-25'>
        <div className="head">
        <Heading className='text-center' >Blog</Heading>
        <Details className='mt-6 text-center mb-18'>There are many variations of passages of Lorem Ipsum available, <br />
        but the majority have suffered alteration.</Details>

        </div>
      <div className="container">
      <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={24}
  slidesPerView={4}
  loop={true}
  autoplay={{
    delay: 2500, 
  }}
  pagination={{
    enabled: true,
    clickable: true,
  }}
  breakpoints={{
    320: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }} 
>

      {blogobj.map((blogCard) => (
     <SwiperSlide key={blogCard.id}>
         <BlogCard blog={blogCard}/>
     </SwiperSlide>
      ))}
     </Swiper>  
      </div>
    </section>
  )
}

export default Blog
