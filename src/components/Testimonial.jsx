import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from './utils/Heading';
import Details from './utils/Details';

const testimonials = [
  {
    text: "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta",
    author: "Esther Howard",
    position: "Managing Director, ABC Company"
  },
  {
    text: "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta",
    author: "John Doe",
    position: "CEO, XYZ Ltd."
  },
  {
    text: "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta",
    author: "Jane Smith",
    position: "Marketing Head, LMN Corp."
  }
];

const Testimonial = () => {
  return (
    <section id='testimonial' className='mt-25 bg-[#ffffff4e]'>
      <div className="container">
        <Heading className="text-center">Testimonial</Heading>
        <Details className="text-center text-lg text-gray-400 mt-6">
          There are many variations of passages of Lorem Ipsum available, <br />
          but the majority have suffered alteration.
        </Details>
        
        <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  loopAdditionalSlides={testimonials.length} 
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  className="mt-10 max-w-3xl mx-auto"
>

          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-center p-8">
              <Details className='text-lg text-gray-800 font-medium leading-[133%]'>
                “{testimonial.text}”
              </Details>
              <h3 className='font-medium text-lg leading-[144%] text-[#000] mt-6'>{testimonial.author}</h3>
              <p className='mt-2 font-light text-[16px] leading-[150%] text-[#000]'>{testimonial.position}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
