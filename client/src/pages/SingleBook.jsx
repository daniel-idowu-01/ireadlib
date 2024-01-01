import React, { useState, useEffect } from 'react'
import { NavBar, TheFooter } from '../components';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { FaStar } from 'react-icons/fa';
import { Card } from 'flowbite-react';

const SingleBook = () => {

  const { id } = useParams();
  const [books, setBooks] = useState([])
  const [bookData, setBookData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    // function to fetch each book data
    const fetchBookData = () => {
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
    }

    // function to fetch suggested books
    const fetchSuggestedBooks = async () => {
      setIsLoading(true)
      await axios.get('https://tech-books-backend.onrender.com/all-books')
      .then(res => {
        setBooks(res.data);
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
    }

    fetchBookData();
    fetchSuggestedBooks();
  }, [])

  console.log(bookData)


  return (
    <div>
      <NavBar />

      <section className='px-10 md:px-20 py-20 md:pt-20 md:pb-20 min-h-screen'>

        {isLoading
            ? 
            <div className="flex flex-col md:flex-row justify-center items-center h-screen">
              <ClipLoader
                color={'#FFD700'}
                loading={isLoading}
                size={30}
              />
            </div>
            :
          <article>
            <section className='flex flex-col md:flex-row gap-10 mt-20'>
              <div>
                <img src={bookData.imageURL} alt="" className='rounded-md w-full md:w-64' />
                <Link to={bookData.bookPDFURL}>
                  <button
                    className='bg-orange w-full rounded-full p-2 mt-2 text-white'
                  >
                    Purchase Book
                  </button>
                </Link>
              </div>

              <div className='md:w-[70%]'>
                <p className='text-2xl md:text-5xl leading-snug font-semibold'>{bookData.bookTitle}</p>
                <p className='mt-2'>{bookData.authorName}</p>
                <div className='flex gap-1 text-amber-500 text-4xl mt-4'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className='mt-10 text-justify'>{bookData.bookDescription}</p>

              </div>
            </section>

            {/* suggested books section */}
            <section>
              <h2
                className='font-semibold text-3xl leading-snug md:leading-[1.5] mt-20'>
                Suggested Books
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
                <div className='grid gap-8 my-12 md:grid-cols-3 lg:grid-cols-4'>
                  {books.map((book, index) => (
                  <Link target='_blank' to={`/book/${book._id}`}>
                    <Card
                      key={index}
                      className="max-w-sm w-72 hover:cursor-pointer hover:scale-105"
                    >
                      <img src={book.imageURL} alt="" className='h-72' />
                      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {book.bookTitle}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {book.authorName}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>}
            </section>
          </article>
        }
      </section>

      <TheFooter />
    </div>
  )
}

export default SingleBook
