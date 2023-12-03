import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/* import './styles.css'; */

// import required modules
import { Pagination } from 'swiper/modules';

import { FaStar } from 'react-icons/fa'
import { Avatar } from 'flowbite-react';
import ProfileImage from '../assets/images/profile.jpg'

const Review = () => {
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
          
          {/* First Slide */}
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className='mt-7'>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eius! Architecto culpa beatae, nam optio explicabo accusantium facilis recusandae aut! Inventore nisi veritatis error animi facere ex quibusdam dolor! Debitis?
                </p>
                <Avatar
                  img={ProfileImage}
                  alt="avatar of Jese"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, Volab LTD</p>
              </div>
            </div>
          </SwiperSlide>
          
          {/* Second Slide */}
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className='mt-7'>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eius! Architecto culpa beatae, nam optio explicabo accusantium facilis recusandae aut! Inventore nisi veritatis error animi facere ex quibusdam dolor! Debitis?
                </p>
                <Avatar
                  img={ProfileImage}
                  alt="avatar of Jese"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, Volab LTD</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Third Slide */}
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className='mt-7'>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eius! Architecto culpa beatae, nam optio explicabo accusantium facilis recusandae aut! Inventore nisi veritatis error animi facere ex quibusdam dolor! Debitis?
                </p>
                <Avatar
                  img={ProfileImage}
                  alt="avatar of Jese"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, Volab LTD</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Fourth Slide */}
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className='mt-7'>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eius! Architecto culpa beatae, nam optio explicabo accusantium facilis recusandae aut! Inventore nisi veritatis error animi facere ex quibusdam dolor! Debitis?
                </p>
                <Avatar
                  img={ProfileImage}
                  alt="avatar of Jese"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, Volab LTD</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Fifth Slide */}
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className='mt-7'>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eius! Architecto culpa beatae, nam optio explicabo accusantium facilis recusandae aut! Inventore nisi veritatis error animi facere ex quibusdam dolor! Debitis?
                </p>
                <Avatar
                  img={ProfileImage}
                  alt="avatar of Jese"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-base'>CEO, Volab LTD</p>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
      </div>
    </section>
  )
}

export default Review
