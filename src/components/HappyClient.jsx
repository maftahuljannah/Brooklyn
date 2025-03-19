import React, { useState } from 'react';
import Heading from './utils/Heading';
import Details from './utils/Details';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const HappyClient = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  return (
    <section className="mt-25">
      <div className="container">
        <Heading className="text-center">Happy Clients</Heading>
        <Details className="text-center mt-6 mb-6">
          There are many variations of passages of Lorem Ipsum available, <br />
          but the majority have suffered alteration.
        </Details>

        <Swiper
          spaceBetween={20}
          loop={true}
          centeredSlides={true} // Keep center slide active
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {[
            "google.png",
            "dribbble.png",
            "linkedin.png",
            "amazon.png",
            "medium.png",
            "spotify.png",
            "google.png",
            "dribbble.png",
            "linkedin.png",
            "amazon.png",
            "medium.png",
            "spotify.png",
          ].map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={`/${img}`}
                alt={img}
                className={`client-logo block mx-auto ${index === activeIndex ? "active" : ""}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HappyClient;
