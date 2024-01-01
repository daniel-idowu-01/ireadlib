import React, { useEffect, useState } from 'react'
import { NavBar, TheFooter } from '../components';
import axios from 'axios';
import { Card } from 'flowbite-react';
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';

const Shop = () => {

  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
          <div className='grid gap-8 my-12 md:grid-cols-3 lg:grid-cols-4'>
            {books.map((book, index) => (
            <Link to={`/book/${book._id}`}>
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

      <TheFooter />
    </div>
  )
}

export default Shop
