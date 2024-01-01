import React, { useState, useEffect } from 'react'
import { NavBar, TheFooter } from '../components';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

const SingleBook = () => {

  const { id } = useParams();
  const [bookData, setBookData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://tech-books-backend.onrender.com/book/${id}`)
      .then(res => {
        setBookData(res.data);
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  console.log(bookData)


  return (
    <div>
      <NavBar />

      <section className='px-10 md:px-20 py-20 md:pt-20 md:pb-20 min-h-screen'>
        <h2 className='font-semibold text-3xl md:text-5xl leading-snug md:leading-[1.5] text-center'>
          All Books
        </h2>

        {isLoading
            ? 
            <div className="flex justify-center items-center h-screen">
              <ClipLoader
                color={'#FFD700'}
                loading={isLoading}
                size={30}
              />
            </div>
            :
          <article className='flex gap-10 mt-10'>
            <div>
              <img src={bookData.imageURL} alt="" />
            </div>

            <div className='w-1/2'>
              <p className='md:text-5xl font-bold leading-snug'>{bookData.bookTitle}</p>
              <p className='mt-2'>{bookData.authorName}</p>
              <p className='mt-10 text-justify'>{bookData.bookDescription}</p>
            </div>
        </article>}
      </section>

      <TheFooter />
    </div>
  )
}

export default SingleBook
