import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Featured = () => {

  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const slicedBooks = books.slice(0, 8)

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://tech-books-backend.onrender.com/all-books')
      .then(res => {
        setBooks(res.data);
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className='px-10 md:px-20 py-10 md:py-20'>
      <h2 className='font-semibold text-3xl md:text-5xl leading-snug md:leading-[1.5] text-center'>
        Best Seller Books
      </h2>

      {isLoading
          ? 
          <div className="flex justify-center items-center mt-10">
            <ClipLoader
              color={'#FFD700'}
              loading={isLoading}
              size={30}
            />
          </div>
          :
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
        {slicedBooks.map(book => (
          <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
              <BookCard {...book} />
            </Link>
          </SwiperSlide>

        ))}
      </Swiper>}

    </div>
  )
}

export default Featured
