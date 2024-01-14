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
                  iREAD is a literary paradise! The vast selection and intuitive search options make it a breeze to find my favorite reads. The community aspect adds a personal touch – sharing recommendations with fellow book lovers is a delightful bonus. My bookshelf has never been more diverse, thanks to this fantastic e-library!
                </p>
                <Avatar
                  img={ProfileImage}
                  alt="avatar of Jese"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Samantha R.</h5>
                <p className='text-base'>Accountant</p>
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
                  As a voracious reader, I was thrilled to discover iREAD. The platform's sleek design and easy navigation make it a joy to explore. I appreciate the curated collections and the ability to find both popular titles and hidden gems. It has become my go-to destination for discovering new literary wonders!
                </p>
                <Avatar
                  img='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww'
                  alt="avatar of Jese"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Alex K.</h5>
                <p className='text-base'>Marketer</p>
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
                  iREAD is a reader's dream come true! The diverse range of genres and the user-friendly interface make it easy to find exactly what I'm looking for. The reviews and recommendations from fellow readers help me discover books I might have overlooked. This site has reignited my passion for reading.
                </p>
                <Avatar
                  img='https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D'
                  alt="avatar of Jese"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Emily M.</h5>
                <p className='text-base'>Software Developer</p>
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
                  I love the convenience of having an entire library at my fingertips. iREAD has transformed my reading experience. The ability to access my favorite books anytime, anywhere is a game-changer. The site's responsiveness and vast catalog make it an indispensable companion for any book lover.
                </p>
                <Avatar
                  img='https://t4.ftcdn.net/jpg/02/62/76/57/360_F_262765707_7ipekmhWAQbIy61VGRdpWo4eHeuN6Ub3.jpg'
                  alt="avatar of Jese"
                  rounded
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Jake H.</h5>
                <p className='text-base'>Student</p>
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
                  iREAD has elevated my reading habits. The platform not only houses an extensive collection but also fosters a sense of community among readers. I've found hidden gems and engaged in thoughtful discussions with fellow book enthusiasts. It's more than just a library – it's a vibrant literary community!
                </p>
                <Avatar
                  img='https://t4.ftcdn.net/jpg/02/62/76/57/360_F_262765707_7ipekmhWAQbIy61VGRdpWo4eHeuN6Ub3.jpg'
                  alt="avatar of Jese"
                  rounded 
                  className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Lila B.</h5>
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
