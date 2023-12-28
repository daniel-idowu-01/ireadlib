import React from 'react'
import { Link } from 'react-router-dom'
import FavBookImage from '../assets/images/favoritebook.jpg'

const FavBook = () => {
  return (
    <section className='flex flex-col sm:flex-row justify-between items-center gap-12 px-10 sm:px-20 py-10'>
      <article className='sm:w-1/2'> 
        <img src={FavBookImage} alt="" className='rounded sm:w-10/12' />
      </article>

      <article className='sm:w-1/2'>
        <h2 className='text-5xl font-bold my-3 sm:w-3/4 leading-snug'>
          Find Your Favorite <span className='text-orange'>Book Here!</span>
        </h2>
        <p className='text-lg'>
          Whether you're a seasoned bibliophile or a casual reader, finding your favorite book has never been more exhilarating. Navigate through our user-friendly interface, seamlessly organized genres, and curated collections to uncover hidden gems and revisit beloved classics. Our advanced search features make it easy to locate that elusive title, author, or genre you've been yearning for.
        </p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 sm:w-3/4 my-5'>
          <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listing</p>
          </div>

          <div>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Register Users</p>
          </div>

          <div>
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>PDFs Downloads</p>
          </div>
        </div>

        <Link to=''>
          <button
            className='bg-orange text-white font-semibold px-5 py-2 rounded hover:bg-opacity-80 transition-all'
          >
            Explore More
          </button>
        </Link>


      </article>
    </section>
  )
}

export default FavBook
