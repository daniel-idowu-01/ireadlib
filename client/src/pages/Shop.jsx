import React, { useEffect, useState } from 'react'
import { NavBar, TheFooter } from '../components';
import axios from 'axios';
import { Card } from 'flowbite-react';

const Shop = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/all-books')
      .then(res => setBooks(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <NavBar />

      <section className='px-10 md:px-20 py-10 md:pt-10 md:pb-20 min-h-screen'>
        <h2 className=' font-semibold text-3xl md:text-5xl leading-snug md:leading-[1.5] text-center'>
          All Books
        </h2>
        
        <div className='grid gap-8 my-12 md:grid-cols-3 lg:grid-cols-4'>
          {books.map(book => (
            <Card
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
          ))}
        </div>
      </section>

      <TheFooter />
    </div>
  )
}

export default Shop
