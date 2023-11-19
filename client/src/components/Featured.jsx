import React, { useState,  useRef, useEffect } from 'react';
import BookCard from './BookCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Featured = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/all-books')
      .then(res => setBooks(res.data))
      .catch(error => console.log(error))
  }, [])
  
  console.log(books)

  return (
    <div className='px-10 sm:px-20 py-10 sm:py-20'>
      <h2  className='font-semibold text-3xl sm:text-5xl leading-snug sm:leading-[1.5] text-center'>Best Seller Books</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper relative top-5"
      >
        {books.map(book => (
          <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
              <BookCard {...book} />
            </Link>
          </SwiperSlide>
        
      ))}
      </Swiper>
      
    </div>
  )
}

export default Featured
