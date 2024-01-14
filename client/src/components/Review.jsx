import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { FaStar } from 'react-icons/fa'
import { Avatar } from 'flowbite-react';

import data from '../data/ReviewData'

const Review = () => {
  console.log(data)
  return (
    <section className='px-10 sm:px-20 py-10 sm:py-20'>
      <h2
        className='font-semibold text-3xl sm:text-5xl leading-snug sm:leading-[1.5] text-center'
      >
        Our Customers
      </h2>

      <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
          {
            data.map((slide, index) => (
              <SwiperSlide key={index} className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'>
                <article className='space-y-6'>
                  <div className='flex gap-2 text-amber-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <div className='mt-7'>
                    <p className='mb-5'>
                      {slide.comment}
                    </p>
                    <Avatar
                      img={slide.image}
                      alt="avatar of Jese"
                      rounded
                      className='w-10 mb-4'
                    />
                        <h5 className='text-lg font-medium'>{slide.name}</h5>
                    <p className='text-base'>{slide.job}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))
          }
          
      </Swiper>
      </div>
    </section>
  )
}

export default Review
