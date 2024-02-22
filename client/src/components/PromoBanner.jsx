import React from 'react'
import { Link } from 'react-router-dom'
import bookImage from '../assets/images/awardbooks.png'

const PromoBanner = () => {
  return (
    <section className='px-10 sm:px-20 py-10 bg-orange bg-opacity-10'>
      <article className='flex flex-col sm:flex-row gap-10 justify-between items-center'>
        <div className='sm:w-1/2'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-snug'>
            2023 National Book Awards For Fiction Shortlist
          </h2>

          <Link to=''>
            <button
              className='bg-orange text-white font-semibold px-5 py-2 rounded hover:bg-opacity-80 transition-all'
            >
              Explore More
            </button>
          </Link>
        </div>

        <div>
          <img src={bookImage} alt="" className='w-96' />
        </div>
      </article>
    </section>
  )
}

export default PromoBanner
